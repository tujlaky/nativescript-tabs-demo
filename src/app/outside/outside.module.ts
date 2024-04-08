import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { OutsideRoutingModule } from "./outside-routing.module";
import { OutsideComponent } from "./outside.component";

@NgModule({
  imports: [NativeScriptCommonModule, OutsideRoutingModule],
  declarations: [OutsideComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class OutsideModule {}
