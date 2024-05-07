import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Category } from '../../../models/category';
import { MessageService, ConfirmationService } from 'primeng/api';

const URL = 'categories'

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.scss',
  providers: [MessageService, ConfirmationService]
})


export class ListCategoriesComponent implements OnInit {

  editing: boolean = false;
  dialogVisible: boolean = false;
  categories: any;
  newCategory: Category = <Category>{};

  clonedCategories: { [s: string]: Category } = {};

  constructor(private httpService: HttpService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.loadAllCategories();
  }

  loadAllCategories() {
    this.httpService.getData(URL).subscribe((data: any) => this.categories = data)
  }

  onRowEditSave(category: Category) {
    this.httpService.updateData(URL, category).subscribe((response: any) => {
      this.loadAllCategories();
      this.messageService.add({ severity: 'success', detail: 'Категория успешно обновлена' });
    })
  }

  onCreateNewCategoryClick() {
    this.httpService.createData(URL, this.newCategory).subscribe((response: any) => {
      this.newCategory = <Category>{};
      this.dialogVisible = false;
      this.loadAllCategories();
      this.messageService.add({ severity: 'success', detail: 'Категория успешно создана' });
    })
  }

  showDeleteConfirmDialog(event: Event, category: Category) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Вы уверены, что хотите удалить категорию: <b>${category.name}</b>?`,
      header: 'Подтверждение',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Да',
      acceptIcon: "pi pi-check mr-2",
      rejectLabel: 'Нет',
      rejectIcon: "pi pi-times mr-2",
      rejectButtonStyleClass: "p-button-text bg-primary",
      accept: () => {
        this.httpService.deleteDataById(URL, category.id).subscribe((response: any) => {
          this.loadAllCategories();
          this.messageService.add({ severity: 'success', detail: 'Категория успешно удалена!' });
        })
      }
    });
  }
}
