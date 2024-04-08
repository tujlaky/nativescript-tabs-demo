import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NSEmptyOutletComponent,
  NativeScriptRouterModule,
} from "@nativescript/angular";

import { TabsComponent } from "./tabs.component";

const routes: Routes = [
  {
    path: "",
    component: TabsComponent,
    children: [
      {
        path: "home",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
          import("~/app/home/home.module").then((m) => m.HomeModule),
        outlet: "homeTab",
      },
      {
        path: "browse",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
          import("~/app/browse/browse.module").then((m) => m.BrowseModule),
        outlet: "browseTab",
      },
      {
        path: "search",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
          import("~/app/search/search.module").then((m) => m.SearchModule),
        outlet: "searchTab",
      },
    ],
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class TabsRoutingModule {}
