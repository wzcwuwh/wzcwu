import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-mentor-info',
  templateUrl: './user-mentor-info.component.html',
  styleUrls: ['./user-mentor-info.component.css']
})
export class UserMentorInfoComponent implements OnInit {

  @Output() private parentMaskOff = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  maskOff(){
    this.parentMaskOff.emit(true)
  }

}
