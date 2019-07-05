import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-ngif',
  templateUrl: './baitap-ngif.component.html',
  styleUrls: ['./baitap-ngif.component.scss']
})
export class BaitapNgifComponent implements OnInit {

  name:string = "phuc";
  newname:string = "";
  password:string = "pass";
  boolean: boolean = false;
  constructor() { }

  ngOnInit() {
    if (Boolean(localStorage.getItem("booleanlocal")) === true) {
      this.boolean = true;
      this.newname = localStorage.getItem("namelocal");
    }
  }

  Kiemtra(name, pass){
    if (name === this.name && pass === this.password) {
      this.boolean = true;
      this.newname = name;
      localStorage.setItem("namelocal", JSON.stringify(name));
      localStorage.setItem("booleanlocal", JSON.stringify("true"));
    } 
  }

  dangxuat(){
    localStorage.removeItem("namelocal");
    localStorage.removeItem("booleanlocal");

  }
}
