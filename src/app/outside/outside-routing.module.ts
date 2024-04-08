import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { OutsideComponent } from './outside.component'

const routes: Routes = [{ path: 'default', component: OutsideComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class OutsideRoutingModule {}
