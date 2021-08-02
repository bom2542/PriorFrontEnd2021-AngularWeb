import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getUserAll () : Observable<any> {
    return this.http.get("https://5d104bdfbebb9800143d14fd.mockapi.io/region").pipe();
  }

  public getUserById (id : number) : Observable<any> {
    return this.http.get("https://5d104bdfbebb9800143d14fd.mockapi.io/region/" + id).pipe();
  }
}
