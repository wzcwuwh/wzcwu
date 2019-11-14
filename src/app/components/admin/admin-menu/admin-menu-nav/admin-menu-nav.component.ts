import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-menu-nav',
  templateUrl: './admin-menu-nav.component.html',
  styleUrls: ['./admin-menu-nav.component.css']
})
export class AdminMenuNavComponent implements OnInit {

  @Output() private navToggle = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  techClick(){
    this.navToggle.emit('tech')
  }

  blockClick(){
    this.navToggle.emit('block')
  }

  paymentClick(){
    this.navToggle.emit('payment')
  }

}
