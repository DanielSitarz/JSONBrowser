import { SharedModule } from './shared/shared.module';
import { BrowseModule } from './browse/browse.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    MainPageComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    BrowseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
