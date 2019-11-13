import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { RoundedDirective } from './diretivas/rounded.directive';

import { TruncatePipe } from './pipes/truncate.pipe';

import { AppRoutingModule } from './app-routing.module';

import { ServerComponent } from './server/server.component';
import { ConsultaElementComponent } from './server/consulta-element/consulta-element.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { LoginComponent } from './login';
import { AppComponent } from './app.component';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ConsultaElementComponent,
    RoundedDirective,
    TruncatePipe,
    TarefasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
