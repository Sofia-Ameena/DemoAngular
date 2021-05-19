import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Users } from "../app/models/users.model";

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor(private hc:HttpClient) { }

  usersData():Observable<Users[]>{
    return this.hc.get<Users[]>('https://jsonplaceholder.typicode.com/users');
    
  }
}
