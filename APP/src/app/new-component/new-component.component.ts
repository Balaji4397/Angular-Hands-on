import { Component, Input, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit,OnDestroy,DoCheck {
  no_1:number
  no_2:number
  result:number

  ngDoCheck(): void{
    console.info("docheck")
  } 

  constructor(private route:Router) {
    console.info("constructor")
  }

   input1(num1){
    this.no_1 = Number(num1)
   }
   input2(num2){
    this.no_2 = Number(num2)
   }
  add(){
    this.result=this.no_1+this.no_2
    console.info("Result=",this.result)
  }
  sub(){
    this.result=this.no_1-this.no_2
    this.route.navigate(['/link_comp'])
    console.info("Result=",this.result)
  }
  mul(){
    this.result=this.no_1*this.no_2
    console.info("Result=",this.result)
  }
  div(){
    this.result=this.no_1/this.no_2
    console.info("Result=",this.result)
  }

  ngOnInit(): void {
    console.info("oninint")
  }

  ngOnDestroy(): void{
    console.info("ondestroy")
  }

  

}
