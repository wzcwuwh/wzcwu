import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  @ViewChild('userMenuNav', {static: true}) searchTxt:string

  public userMenuListShow:boolean = true

  public userSearchResultShow:boolean = false

  public searchClickTxt:string = ''

  public navSearchTxt:string = ''

  constructor() { }

  ngOnInit() {
  }

  searchClick(e:any){
    this.userMenuListShow = false
    this.userSearchResultShow = true

    this.searchClickTxt = e
    this.navSearchTxt = this.searchTxt
  }

}
