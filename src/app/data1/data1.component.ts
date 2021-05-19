import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../data1.service';
import { TotalData } from '../models/data.model';

@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css']
})
export class Data1Component implements OnInit {

  myData;

  constructor(private dobj:Data1Service) { }

  ngOnInit(): void {
    this.dobj.getData().subscribe(
      Data=>{
        this.myData=Data;
      },
      err=>{
        console.log("error in data1",err);
      }
    )
  }
}
