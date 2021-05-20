import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Users } from './models/users-interface.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private hc:HttpClient) { }

  getUsers():Observable<Users[]>{
    return this.hc.get<Users[]>("http://localhost:3000/users");
  }

  getUsersId(id):Observable<Users[]>{
    return this.hc.get<Users[]>("http://localhost:3000/users/"+id);
  }
}
