import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as productInsect from '../../../assets/files/مبيدات حشرية خام.json';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  productName:any;
  productImport=productInsect;
  products:any=[]
  constructor(private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.productName=params.get('category')
      for (let index = 0; index < this.productImport.length; index++) {
        this.products[index]=this.productImport[index];
      }
    })
  }
}
