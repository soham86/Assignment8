import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  
  @Input() public parentData

  constructor() { }

  public ValueFromText:string="I am from Child"
  @Output() public MyEvent = new EventEmitter();
  ngOnInit() {
  }

  sendEvent(){
    this.MyEvent.emit(this.ValueFromText);
  }
}
