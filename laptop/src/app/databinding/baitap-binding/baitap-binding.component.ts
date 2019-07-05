import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-binding',
  templateUrl: './baitap-binding.component.html',
  styleUrls: ['./baitap-binding.component.scss']
})
export class BaitapBindingComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {
  }

  email:String = "star";
  name: String = "";
  submit(value){
    this.name = value;
  }

}
