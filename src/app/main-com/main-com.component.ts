import { Component, OnInit } from '@angular/core';
//import { menuAnimations } from './animations';'
import {Chart,registerables} from  'chart.js'
Chart.register(...registerables)
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-main-com',
  templateUrl: './main-com.component.html',
  styleUrl: './main-com.component.css'
})
export class MainComComponent implements OnInit {
  isHandset: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isHandset = result.matches;
    });
  }

  title = 'DashboardProject';
  isSubmenuOpen: boolean = true;

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }
}