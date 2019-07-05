import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {


  status:boolean = false;

  statusLogin:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  showhide(){
    if (this.status === false) {
      this.status = true;
    }else{
      this.status = false;
    }
  }

  dangxuat(){
    this.statusLogin = false;
  }

  dangnhap(){
    this.statusLogin = true;
  }
}
