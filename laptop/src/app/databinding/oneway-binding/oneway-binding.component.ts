import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.scss']
})
export class OnewayBindingComponent implements OnInit {

  name: string = "NguyenDinhPhuc";

  constructor() { }

  ngOnInit() {}

  // Event Binding
  eventBinding(thamso){
    let i:number = 0;
    i++;
    console.log(thamso + i);
  }
}
