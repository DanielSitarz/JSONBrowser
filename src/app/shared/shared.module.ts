import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';



@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatMomentDateModule
  ],
  exports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
