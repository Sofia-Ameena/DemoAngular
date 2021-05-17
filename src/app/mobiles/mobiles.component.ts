import { Component, OnInit } from '@angular/core';
import { MobilesDataService } from '../mobiles-data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{

  mobiles:Product[]=[];
  constructor(private dsObj:MobilesDataService){}

  ngOnInit(){
    this.mobiles=this.dsObj.getMobilesData();
  }
}
