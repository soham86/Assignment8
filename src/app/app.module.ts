import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import {FormsModule} from '@angular/forms';
import { NgModelCompComponent } from './ng-model-comp/ng-model-comp.component';
import { WithoutNgModelCompComponent } from './without-ng-model-comp/without-ng-model-comp.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    NgModelCompComponent,
    WithoutNgModelCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
