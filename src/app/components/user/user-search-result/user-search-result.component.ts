import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-search-result',
  templateUrl: './user-search-result.component.html',
  styleUrls: ['./user-search-result.component.css']
})
export class UserSearchResultComponent implements OnInit {

  @Input() searchClickTxt:string = ''

  public starItems:Array<any> = new Array<any>(5)

  public starClicked:boolean = false

  public maskWidth:string = ''

  public maskHeight:string = ''

  public maskShow:boolean = false

  constructor(public router: Router) { }

  ngOnInit() {
  }

  trainerDetail(){
    this.popupMask()
    // this.router.navigateByUrl('/user/mentor/info')
  }

  popupMask(){
    let sHeight = document.documentElement.scrollHeight
    let sWidth = document.documentElement.scrollWidth

    this.maskWidth = sWidth + 'px'
    this.maskHeight = sHeight + 'px'

    this.maskShow = true
    // let oMask = document.createElement('div')
    // oMask.id = 'mask'
    // oMask.style.height = sHeight + 'px'
    // oMask.style.width = sWidth + 'px'

    // oMask.style.background = '#000'
    // oMask.style.opacity = '0.75'
    // oMask.style.position = 'absolute'
    // oMask.style.left = '0'
    // oMask.style.top = '0'
    // oMask.style.zIndex = '100'

    // let oInfo = document.createElement('div')
    // oInfo.style.height = '400px'
    // oInfo.style.width = '600px'
    // oInfo.style.backgroundColor = 'red'
    // oInfo.style.zIndex = '1000'
    // oInfo.style.position = 'absolute'
    // oInfo.style.left = '0'
    // oInfo.style.top = '0'
    // oInfo.style.right = '0'
    // oInfo.style.bottom = '0'
    // oInfo.style.margin = 'auto'

    // oMask.appendChild(oInfo)

    // document.body.appendChild(oMask)
  }

  starMouseover(key:number){
    if(!this.starClicked){
      this.toggleStar(key, 'yellow')
    }
  }

  starMouseout(key:number){
    if(!this.starClicked){
      this.toggleStar(key, 'white')
    }
  }

  starClick(key:number){
    this.starClicked = true
    this.toggleStar(key, 'yellow')
  }

  toggleStar(key:number, color:string){
    let starItems = $('#star-items li')
    for(let i = 0; i <= key; i++){
      starItems[i].style.color = color
    }
  }

  runMaskOff(e){
    if(e){
      this.maskShow = false
    }
  }

}
