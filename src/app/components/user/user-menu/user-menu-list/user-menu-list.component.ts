import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-menu-list',
  templateUrl: './user-menu-list.component.html',
  styleUrls: ['./user-menu-list.component.css']
})
export class UserMenuListComponent implements OnInit {

  @Input() navSearchTxt:string = ''

  public searchList:any[] = []

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.navSearchTxt)
  }

}
