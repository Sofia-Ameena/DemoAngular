import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent{

  products:Product[]=[
    {
      productImage:"https://imgk.timesnownews.com/media/Kawasaki_ninja_zx10r.png?tr=w-400,h-300,fo-auto",
      productTitle:"Kawasaki",
      productDescription:"₹300000"
    },
    {
      productImage:"https://bd.gaadicdn.com/processedimages/yamaha/mt-15-bs6/640X309/mt-15-bs65e5f4e81d80d7.jpg",
      productTitle:"MT-15",
      productDescription:"₹140000"
    },
    {
      productImage:"https://images.91wheels.com//assets/b_images/gallery/ktm/duke-125/ktm-duke-125-0-1618165339.png?width=300",
      productTitle:"KTM Duke-390",
      productDescription:"₹290000"
    },
    {
      productImage:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-463158,resizemode-1,msid-79036845/magazines/panache/new-version-of-tvs-apache-rtr-200-4v-comes-to-india-at-rs-1-31-lakh.jpg",
      productTitle:"Apache",
      productDescription:"₹130000"
    },
    {
      productImage:"https://ic1.maxabout.us/autos/tw_india//2/2021/3/2021-bajaj-pulsar-ns160-bike.jpg",
      productTitle:"Pulsar",
      productDescription:"₹100000"
    },
    {
      productImage:"https://s.yimg.com/ny/api/res/1.2/ov_ZbRc9oRoSvvIwHtq6zg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTUzOS4zMzMzMzMzMzMzMzM0/https://s.yimg.com/uu/api/res/1.2/68_3H7Og335COgcAKcrjMw--~B/aD04MDk7dz0xNDQwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/newsbytes_319/e19f777bd3473d4e1804f963528be599",
      productTitle:"R15",
      productDescription:"₹200000"
    },
    {
      productImage:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20190226123546_Honda-CB-Unicorn-150-ABS.jpg&h=795&w=1200&c=1",
      productTitle:"Unicorn",
      productDescription:"₹80000"
    },
    {
      productImage:"https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/classic/landing/classic-pure-black.jpg",
      productTitle:"Royal Enfield",
      productDescription:"₹200000"
    }
  ]
}
