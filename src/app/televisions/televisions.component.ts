import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent {

  products:Product[]=[
    {
      productImage:"https://images-na.ssl-images-amazon.com/images/I/61qVVtdXJ1L._AC_SX679_.jpg",
      productTitle:"Sony Ultra HD",
      productDescription:"₹1,00,000"
    },
    {
      productImage:"https://images-na.ssl-images-amazon.com/images/I/81CnumJVUGL._AC_SL1500_.jpg",
      productTitle:"LG",
      productDescription:"₹90,000"
    },
    {
      productImage:"https://images-na.ssl-images-amazon.com/images/I/91-PrDtO8eL._AC_SL1500_.jpg",
      productTitle:"Redmi",
      productDescription:"₹80,000"
    },
    {
      productImage:"https://images-na.ssl-images-amazon.com/images/I/91o08DsRplL._AC_SX355_.jpg",
      productTitle:"Samsung",
      productDescription:"₹1,50,000"
    },
    {
      productImage:"https://images-na.ssl-images-amazon.com/images/I/713ZK2DXsSL._AC_SL1500_.jpg",
      productTitle:"Sansui",
      productDescription:"₹75,000"
    },
    {
      productImage:"https://static.digit.in/default/514997f36523c8adf3cb55a2d5f552a58b5bbabb.jpeg?tr=w-1200",
      productTitle:"Panasonic",
      productDescription:"₹70,000"
    },
    {
      productImage:"https://i.gadgets360cdn.com/products/televisions/large/1548154728_832_vu_55-inch-led-full-hd-tv-tl55s1cus.jpg",
      productTitle:"Vu",
      productDescription:"₹45,000"
    },
    {
      productImage:"https://asset.conrad.com/media10/isa/160267/c1/-/en/1573548_BB_00_FB/image.jpg",
      productTitle:"Telefunken",
      productDescription:"₹40,000"
    }
  ]
}
