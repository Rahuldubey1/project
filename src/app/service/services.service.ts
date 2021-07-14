import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    return this.http.get(`https://api.hatchways.io/assessment/students`,{
    });
  }
}
