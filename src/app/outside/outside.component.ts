import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "Outside",
  templateUrl: "./outside.component.html",
})
export class OutsideComponent implements OnInit {
  constructor(private _routerExtensions: RouterExtensions) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    console.log("OPEN");
    // Use the "ngOnInit" handler to initialize data for the view.
  }

  onBackTap(): void {
    this._routerExtensions.back();
  }
}
