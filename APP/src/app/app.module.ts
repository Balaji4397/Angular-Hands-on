import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
// import {RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { LinkCompComponent } from './link-comp/link-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    LinkCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule
  ],
  providers: [],
  bootstrap: [NewComponentComponent]
})
export class AppModule { }
