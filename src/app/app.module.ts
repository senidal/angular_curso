import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//tare:
//crear un modulo contadorModule
//declaraciones y exportaciones
import { HeroesModule } from './Heroes/Heroes.module';
import { contadorModule } from './contador/contador.module';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
