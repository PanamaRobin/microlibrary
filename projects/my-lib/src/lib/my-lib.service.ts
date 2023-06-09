import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private readonly httpClient: HttpClient) {}

  getLocations() {
    return this.httpClient.get<any>(`https://rickandmortyapi.com/api/localtions`);
  }
}
