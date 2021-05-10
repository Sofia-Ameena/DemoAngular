import { Component, OnInit } from '@angular/core';
import { Product } from "../models/product.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products:Product[]=[

    {
      productImage:"https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/10/hp-spectre-x360-14-press-1.jpg",
      productTitle:"Laptop",
      productDescription:"₹50000"
    },
    {
      productImage:"https://i.pcmag.com/imagery/reviews/05oDWS6cGc0WVJM2rvEcjOv-1..1600807382.jpg",
      productTitle:"Camera",
      productDescription:"₹25000"
    },
    {
      productImage:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/268453-Best_Running_Shoes_for_Flat_Feet-1296x728-header-1296x728.jpg?w=1155&h=1528",
      productTitle:"Shoes",
      productDescription:"₹3000"
    },
    {
      productImage:"https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg",
      productTitle:"Car",
      productDescription:"₹800000"
    },
    {
      productImage:"https://cdn.theatlantic.com/thumbor/1k9uaSp403gwZBTIvGsbPMMaqNk=/0x0:2000x1125/1600x900/media/img/mt/2019/05/backpack/original.jpg",
      productTitle:"Backpack",
      productDescription:"₹3000"
    },
    {
      productImage:"https://i.gadgets360cdn.com/products/large/realme-smart-tv-32-db-800x450-1590390588.jpg",
      productTitle:"Smart TV",
      productDescription:"₹95000"
    },
    {
      productImage:"https://cdn.shopify.com/s/files/1/2996/3226/products/coverdrive_chinnaswamy_cognac_steel_600x.jpg?v=1606571375",
      productTitle:"Watch",
      productDescription:"₹2500"
    },
    {
      productImage:"https://www.businessinsider.in/photo/77801640/Best-Bluetooth-headphones-in-India.jpg?imgsize=89632",
      productTitle:"Headphones",
      productDescription:"₹2000"
    }

  ]

}

