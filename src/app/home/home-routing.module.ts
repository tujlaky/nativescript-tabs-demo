import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { HomeComponent } from "./home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ItemDetailMoreComponent } from "./item-detail-more/item-detail-more.component";

const routes: Routes = [
  { path: "default", component: HomeComponent },
  { path: "item/:id", component: ItemDetailComponent },
  { path: "item/:id/details", component: ItemDetailMoreComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
