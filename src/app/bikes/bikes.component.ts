import { Component, OnInit } from '@angular/core';
import { BikesDataService } from '../bikes-data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit{
  bikes:Product[]=[];
  constructor(private msObj:BikesDataService){}

  ngOnInit(){
    this.bikes=this.msObj.getBikesData();
  }
}
