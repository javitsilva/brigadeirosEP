import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private currentPath: String;

  constructor(private location: Location) {}

  isActive(tab: String): boolean {
    var tabPath = '/' + tab;
    if(this.currentPath.includes(tabPath))
      return true;
    else
      return false;
  }

  ngOnInit() {
    this.currentPath = this.location.path();
  }
}
