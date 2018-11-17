import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface Bar {
  name: string;
  city: string;
  phone: string;
  addr: string;
}

export interface BarMenuItem {
  beer: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor(
    public http: HttpClient
  ) { }

  getBars() {
    return this.http.get<Bar[]>('/api/bar');
  }

  getBar( bar: string) {
    return this.http.get<Bar>('/api/bar/' + bar);
  }

  getMenu( bar: string) {
    return this.http.get<BarMenuItem[]>('/api/menu/' + bar);
  }
}
