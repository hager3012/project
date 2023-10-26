import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as productInsect from '../../../assets/files/productInsect.json';
import * as productInnate from '../../../assets/files/productInnate.json';
import * as CrudeGrowthRegulators from '../../../assets/files/CrudeGrowthRegulators.json';
import * as EndProductGrowthRegulators from '../../../assets/files/EndProductGrowthRegulators.json';
import * as InsecticidesFinishedProduct from '../../../assets/files/InsecticidesFinishedProduct.json';
import * as SyntheticFungicides from '../../../assets/files/SyntheticFungicides.json';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  productName:any;
  productImport:any=[];
  products:any=[]
  productsFinal:any=[]
  constructor(private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.productName=params.get('category')
      if(this.productName == "مبيدات حشرية خام"){
        this.productImport=productInsect;
        for (let index = 0; index < this.productImport.length; index++) {
          this.products[index]=this.productImport[index];
        }
      }
        else if(this.productName == "مبيدات فطرية خام") {
          this.products=[];
          this.productImport=productInnate;
          for (let index = 0; index < this.productImport.length; index++) {
            this.products[index]=this.productImport[index];
          }
        }
        else if(this.productName == "منظمات نمو خام") {
          this.products=[];
          this.productImport=CrudeGrowthRegulators;
          for (let index = 0; index < this.productImport.length; index++) {
            this.products[index]=this.productImport[index];
          }
        }
        else if(this.productName == "منظمات نمو منتج نهائي") {
          this.products=[];
          this.productImport=EndProductGrowthRegulators;
          for (let index = 0; index < this.productImport.length; index++) {
            this.products[index]=this.productImport[index];
          }
        }
        else if(this.productName == "مبيدات حشرية منتج نهائي") {
          this.products=[];
          this.productImport=InsecticidesFinishedProduct;
          for (let index = 0; index < this.productImport.length; index++) {
            this.products[index]=this.productImport[index];
          }
        }
        else if(this.productName == "مبيدات فطرية منتج نهائى") {
          this.products=[];
          this.productImport=SyntheticFungicides;
          for (let index = 0; index < this.productImport.length; index++) {
            this.products[index]=this.productImport[index];
          }
        }


      // for (let index = 0; index < this.productImport.length; index++) {
      //   this.products[index]=this.productImport[index];
      //   console.log(this.productName);

      //   if(this.products[index].categoryName.includes(this.productName))
      //   {
      //     console.log(this.productName);
      //     this.productsFinal[index]=this.products[index];


      //   }



      // }
    })

  }
}
