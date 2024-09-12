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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // animations: [menuAnimations]
  animations: [
    trigger('submenuState', [
      state('closed', style({ height: '0px', overflow: 'hidden', opacity: 0 })),
      state('open', style({ height: '*', overflow: 'hidden', opacity: 1 })),
      transition('closed <=> open', animate('300ms ease-in-out')),
    ]),
  ],
})
export class AppComponent implements OnInit {
  isHandset: boolean = false; // Initialize with a default value

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
      this.isHandset = result.matches;
    });
  }
  title = 'DashbardProject';
  isSubmenuOpen = true;

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }
}
