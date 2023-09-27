import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  customOptions: OwlOptions = {
    autoplayHoverPause: true,
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 3000,
    autoplayTimeout:2000 ,
    navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
    nav: true
  }
  categories:any=[
    {ImageSrc:"assets/images/مبيدات فطرية 1.jfif",nameCategory:"مبيدات فطرية خام"},
    {ImageSrc:"assets/images/WhatsApp Image 1.jpeg",nameCategory:"مبيدات حشرية خام "},
    {ImageSrc:"assets/images/منظمات نمو 1.jfif",nameCategory:"منظمات نمو خام"},
    {ImageSrc:"assets/images/مبيدات فطرية 2.jfif",nameCategory:"مبيدات فطرية منتج نهائي"},
    {ImageSrc:"assets/images/WhatsApp Image2.jpeg",nameCategory:"مبيدات حشرية منتج نهائي"},
    {ImageSrc:"assets/images/منطمات نمو 2.jfif",nameCategory:"منظمات نمو منتج نهائي"},

  ];

  products:any=[
    {image:"assets/images/بامكتين.jpeg",name:"أبامكتين",concentration:"96",categoryName:"مبيدات حشرية خام"},
    {image:"assets/images/بيريدابين.jpeg",name:"بيريدابين",concentration:"95",categoryName:"مبيدات حشرية خام"},
    {image:"assets/images/كلوروفينابير.jpeg",name:"كلوروفينابير",concentration:"95",categoryName:"مبيدات حشرية خام"},
    {image:"assets/images/لمبادا سيهالوثرين .jpeg",name:"لمبادا سيهالوثرين",concentration:"97",categoryName:"مبيدات حشرية خام"},
    {image:"assets/images/أميداكلوبريد.jpeg",name:"أميداكلوبريد",concentration:"98",categoryName:"مبيدات حشرية خام"},
    {image:"assets/images/الفاسايبرمثرين.jpeg",name:"الفاسايبرمثرين",concentration:"95",categoryName:"مبيدات حشرية خام",}
  ]
}
