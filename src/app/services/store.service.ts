import { Injectable } from '@angular/core';
import { Category } from '../models/category';

const CATEGORIES_KEY = 'categories'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private categories: Category[] = [];

  constructor() { }

  initializeCategories(categories: Category[]) {
    let item = localStorage.getItem(CATEGORIES_KEY);
    if (item) {
      this.categories = JSON.parse(item);
    } else {
      this.categories = categories;
      localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
    }
  }

  getCategories() {
    return this.categories;
  }


}
