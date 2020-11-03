import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceModeComponent } from './choice-mode/choice-mode.component';
import { EsayModeComponent } from './esay-mode/esay-mode.component';
import { HardModeComponent } from './hard-mode/hard-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceModeComponent,
    EsayModeComponent,
    HardModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
