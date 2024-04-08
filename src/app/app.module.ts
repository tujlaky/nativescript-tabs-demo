import {
  ENVIRONMENT_INITIALIZER,
  inject,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Router, NavigationStart, RouterEvent } from "@angular/router";
import { filter } from "rxjs";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  // providers: [
  //   {
  //     provide: ENVIRONMENT_INITIALIZER,
  //     multi: true,
  //     useFactory: () => {
  //       const router = inject(Router);
  //       return () =>
  //         router.events
  //           .pipe(filter((e) => e instanceof NavigationStart))
  //           .subscribe((e) => {
  //             const routerEvent: RouterEvent = e as RouterEvent;
  //             // tslint:disable:no-console
  //             console.log(`Navigate to ${routerEvent.url} (${routerEvent.id})`);
  //             // tslint:enable:no-console
  //           });
  //     },
  //   },
  // ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
