import { Component, OnInit } from "@angular/core";

@Component({
  selector: "Tabs",
  templateUrl: "./tabs.component.html",
})
export class TabsComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    console.log("OPEN");
    // Use the "ngOnInit" handler to initialize data for the view.
  }
}
