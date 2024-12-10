import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroment/enviromen';
import { Stock } from '../interface/component.model';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  private baseUrl = environment.apiUrl+'/components';

  constructor(private http: HttpClient) {}

  getComponents(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
  createComponent(component: Stock): Observable<any> {
    return this.http.post<Stock>(this.baseUrl, component);
  }
}
