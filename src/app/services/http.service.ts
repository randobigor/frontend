import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SearchCriteria } from '../models/search-criteria';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url: string = environment.REST_API_SERVER;

  constructor(private httpClient: HttpClient) { }

  public getData(queryUrl: string): any {
    return this.httpClient.get(this.url + queryUrl);
  }

  public getDataById(queryUrl: string, id: number): any {
    return this.httpClient.get(this.url + queryUrl + '/' + id);
  }

  public getDataByFilter(queryUrl: string, filter: SearchCriteria[]) {
    return this.httpClient.post(this.url + queryUrl, filter);
  }

  public createData(queryUrl: string, body: Object): any {
    return this.httpClient.post(this.url + queryUrl, body);
  }

  public updateData(queryUrl: string, body: Object): any {
    return this.httpClient.put(this.url + queryUrl, body);
  }

  public updateDataWithParams(queryUrl: string, params: Object): any {
    return this.httpClient.put(this.url + queryUrl, { params: params });
  }

  public deleteDataById(queryUrl: string, id: any) {
    return this.httpClient.delete(this.url + queryUrl + '/' + id);
  }

  sellPcBuild(buildId: number, soldPrice: number) {
    return this.httpClient.put(this.url + environment.SELL_BUILD + '?buildId=' + buildId + '&soldPrice=' + soldPrice, {});
  }

  findAllCpusBySocket(socket: string): any {
    return this.httpClient.get(this.url + environment.CPU_BY_SOCKET + '?socket=' + socket);
  }

  getRamByType(type: string): any {
    return this.httpClient.get(this.url + environment.MEMORY_BY_TYPE + '?type=' + type);
  }

  findAllMotherboardsBySocket(socket: string): any {
    return this.httpClient.get(this.url + environment.MOTHERBOARD_BY_SOCKET + '?socket=' + socket);
  }

  findAllMotherboardsByRamType(ramType: string): any {
    return this.httpClient.get(this.url + environment.MOTHERBOARD_BY_RAM_TYPE + '?ramType=' + ramType);
  }

  findAllMotherboardsBySocketAndRamType(socket: string, ramType: string): any {
    return this.httpClient.get(this.url + environment.MOTHERBOARD_BY_SOCKET_AND_RAM_TYPE + '?socket=' + socket + '&ramType=' + ramType);
  }

}
