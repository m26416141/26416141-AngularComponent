import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { FavoritComponent } from './favorit/favorit.component';
import { GlobalVarService } from './global-var.service';

const ROUTES: Routes = [
  { path: "detail", component: DetailComponent },
  { path: "favorit", component: FavoritComponent },
  { path: "input", component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    FavoritComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GlobalVarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
