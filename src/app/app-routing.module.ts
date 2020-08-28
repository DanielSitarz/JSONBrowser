import { SharedModule } from './shared/shared.module';
import { MAIN_PAGE, BROWSE_PAGE } from './app-consts';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowseComponent } from './browse/browse.component';
import { BrowseRawComponent } from './browse/browse-raw/browse-raw.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent, data: { animation: MAIN_PAGE.main } },
  {
    path: 'browse', component: BrowseComponent, data: { animation: MAIN_PAGE.plan },
    children: [
      { path: '', redirectTo: 'raw', pathMatch: 'full' },
      { path: 'raw', component: BrowseRawComponent, data: { animation: BROWSE_PAGE.raw } },
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports: []
})
export class AppRoutingModule { }
