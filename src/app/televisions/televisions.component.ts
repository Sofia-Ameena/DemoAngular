import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { TelivisionsDataService } from '../telivisions-data.service';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit{

  telivisions:Product[]=[];
  constructor(private tsObj:TelivisionsDataService){}

  ngOnInit(){
    this.telivisions=this.tsObj.getTelivisionsData();
  }
}
