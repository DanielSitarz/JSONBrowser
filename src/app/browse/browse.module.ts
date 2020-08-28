import { CommonModule } from '@angular/common';
import { BrowseRawComponent } from './browse-raw/browse-raw.component';
import { SharedModule } from './../shared/shared.module';
import { BrowseMenuComponent } from './browse-menu/browse-menu.component';
import { BrowseUrlInputComponent } from './browse-url-input/browse-url-input.component';
import { NgModule } from '@angular/core';
import { BrowseComponent } from './browse.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowseControlComponent } from './browse-control/browse-control.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


@NgModule({
  declarations: [
    BrowseComponent,
    BrowseMenuComponent,
    BrowseUrlInputComponent,
    BrowseRawComponent,
    BrowseControlComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    NgxJsonViewerModule
  ]
})
export class BrowseModule { }
