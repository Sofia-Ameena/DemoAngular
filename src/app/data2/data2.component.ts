import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';
import { Users } from '../models/users.model';

@Component({
  selector: 'app-data2',
  templateUrl: './data2.component.html',
  styleUrls: ['./data2.component.css']
})
export class Data2Component implements OnInit {

  constructor(private uObj:Data2Service) { }

  myUsers:Users[]=[];
  ngOnInit(): void {
    this.uObj.usersData().subscribe(
      userData=>{
        this.myUsers=userData;
      },
      err=>{
        console.log("error in users data",err);
      }
    )
  }
}
