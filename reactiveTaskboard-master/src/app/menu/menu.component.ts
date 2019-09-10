import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _taskdata:TaskService) { }

  ngOnInit() {
  }
  onLogOut(){
    this._taskdata.logout();
  }
  isLoggedIn(){
    return this._taskdata.isLogged;
  }
}

