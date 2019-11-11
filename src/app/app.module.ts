import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server/server.component';
import { ConsultaElementComponent } from './server/consulta-element/consulta-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ConsultaElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
