import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldInfoComponent } from './components/world-info/world-info.component';
import { WorldComponent } from './components/world/world.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldInfoComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
