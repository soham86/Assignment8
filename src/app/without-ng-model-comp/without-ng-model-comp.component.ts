import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-without-ng-model-comp',
  templateUrl: './without-ng-model-comp.component.html',
  styleUrls: ['./without-ng-model-comp.component.css']
})
export class WithoutNgModelCompComponent implements OnInit {

  constructor() { }
  lengthOfText:string="0"
  ngOnInit() {
  }

  fromTextBox(e:any){
    this.lengthOfText = (<HTMLInputElement>e.target).value.length.toString()
    
  }
}
