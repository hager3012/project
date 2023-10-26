import { Component, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private _Router:Router) {}
  public async onClick(elementId: string): Promise<void> {
   try {
    await this._Router.navigate(["/home"]);
    document.getElementById(elementId)?.scrollIntoView({
      behavior: "smooth"
    });
 } catch (error) {
    console.error("Navigation error:", error);
 }
  }
}
