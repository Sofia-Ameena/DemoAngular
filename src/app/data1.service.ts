import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TotalData } from "../app/models/data.model";

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor(private hc:HttpClient) { }

  getData():Observable<TotalData[]>{
    return this.hc.get<TotalData[]>('https://reqres.in/api/unknown');
    
  }
}


