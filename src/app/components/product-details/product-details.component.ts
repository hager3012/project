import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as AllProduct from '../../../assets/files/AllProduct.json';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  productName:any;
  productDetails:any=AllProduct;
  product:any;
  myThumbnail:any;
  myFullresImage:any;
  constructor(private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.productName=params.get('name')
    })
    for (let index = 0; index < this.productDetails.length; index++) {
      if(this.productDetails[index].name==this.productName)
      {
        this.product=this.productDetails[index]
        this.myThumbnail=this.product.image;
        this.myFullresImage=this.product.image;
      }


    }


  }
}
