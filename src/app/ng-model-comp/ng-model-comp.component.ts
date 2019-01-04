import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-comp',
  templateUrl: './ng-model-comp.component.html',
  styleUrls: ['./ng-model-comp.component.css']
})
export class NgModelCompComponent implements OnInit {
public ValueForText:string=""
  constructor() { }

  ngOnInit() {
  }

}
