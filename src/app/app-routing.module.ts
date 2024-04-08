import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";

const routes: Routes = [
  {
    path: "",
    redirectTo:
      "/tabs/(homeTab:home/default//browseTab:browse/default//searchTab:search/default)",
    pathMatch: "full",
  },
  {
    path: "tabs",
    loadChildren: () =>
      import("~/app/tabs/tabs.module").then((m) => m.TabsModule),
  },
  {
    path: "outside",
    loadChildren: () =>
      import("~/app/outside/outside.module").then((m) => m.OutsideModule),
  },
];

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot(routes, {
      enableTracing: true,
    }),
  ],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
