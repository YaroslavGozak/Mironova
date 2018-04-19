import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { MasterComponent } from './components/master-component/master.component';
import { DetailComponent } from './components/detail-component/detail.component';


@NgModule({
  declarations: [
    MasterComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
