import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class MobilesDataService {

  constructor() { }
    moblies:Product[]=[
    {
      productImage:"https://images-na.ssl-images-amazon.com/images/I/61Tw6LZoaiL._SL1500_.jpg",
      productTitle:"OnePlus 8T5G",
      productDescription:"₹50000"
    },
    {
      productImage:"https://www.91-img.com/pictures/136164-v6-oneplus-8-pro-mobile-phone-large-1.jpg?tr=q-60",
      productTitle:"OnePlus 8Pro",
      productDescription:"₹50000"
    },
    {
      productImage:"https://www.91-img.com/pictures/139366-v6-xiaomi-redmi-9-prime-mobile-phone-large-1.jpg?tr=q-60",
      productTitle:"Redmi 9Prime",
      productDescription:"₹50000"
    },
    {
      productImage:"https://www.91-img.com/pictures/139915-v3-xiaomi-redmi-9i-mobile-phone-large-1.jpg",
      productTitle:"Redmi 9i",
      productDescription:"₹50000"
    },
    {
      productImage:"https://www.91-img.com/pictures/139509-v4-realme-c12-mobile-phone-large-1.jpg?tr=h-330,c-at_max,q-60",
      productTitle:"OnePlus",
      productDescription:"₹50000"
    },
    {
      productImage:"https://media.croma.com/image/upload/v1605303547/Croma%20Assets/Communication/Mobiles/Images/8999480819742.png",
      productTitle:"realme C12",
      productDescription:"₹50000"
    },
    {
      productImage:"https://images-na.ssl-images-amazon.com/images/I/61Tw6LZoaiL._SL1500_.jpg",
      productTitle:"OnePlus",
      productDescription:"₹50000"
    },
    {
      productImage:"https://images-na.ssl-images-amazon.com/images/I/61Tw6LZoaiL._SL1500_.jpg",
      productTitle:"OnePlus Nord 5G",
      productDescription:"₹50000"
    },
  ]

  getMobilesData():Product[]{
    return this.moblies;
  }
}

