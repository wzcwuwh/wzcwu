import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  public techShow:boolean = true

  public blockShow:boolean = false

  public paymentShow:boolean = false

  constructor() { }

  ngOnInit() {
  }

  navToggle(e:any){
    if(e == 'tech'){
      this.techShow = true
      this.blockShow = false
      this.paymentShow = false
    } else if(e == 'block'){
      this.techShow = false
      this.blockShow = true
      this.paymentShow = false
    } else if(e == 'payment'){
      this.techShow = false
      this.blockShow = false
      this.paymentShow = true
    } else{
      //navigate to admin menu
    }
  }

}
