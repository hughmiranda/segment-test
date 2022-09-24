import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './my-component/my-component.component';
import { SegmentModule } from 'ngx-segment-analytics';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SegmentModule.forRoot({ apiKey: 'rdzetBuDfyosQM2Nmc5xtF8YSVsqpkTU', debug: true, loadOnInitialization: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
