import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AlltasksComponent } from './alltasks/alltasks.component';

@NgModule({
  declarations: [
    AppComponent,
    AlltasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


