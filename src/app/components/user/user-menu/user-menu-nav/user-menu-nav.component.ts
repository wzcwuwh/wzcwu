import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-menu-nav',
  templateUrl: './user-menu-nav.component.html',
  styleUrls: ['./user-menu-nav.component.css']
})
export class UserMenuNavComponent implements OnInit {

  public searchTxt:string = ''

  public startTime:string = ''

  @Output() private searchClick = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchClick.emit(this.searchTxt)
  }

}
