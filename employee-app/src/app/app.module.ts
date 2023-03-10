import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainappComponent } from './component/mainapp/mainapp.component';
import { HeaderComponent } from './component/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    MainappComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
