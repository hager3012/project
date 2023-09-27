import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  
  constructor(private viewportScroller: ViewportScroller) {}
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);

  }
}
