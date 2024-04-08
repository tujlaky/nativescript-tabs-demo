import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ItemDetailMoreComponent } from "./item-detail-more/item-detail-more.component";

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule],
  declarations: [HomeComponent, ItemDetailComponent, ItemDetailMoreComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
