import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EpsgConverterComponent } from './components/epsg-converter/epsg-converter.component';
import { CoordinateConverterService } from './services/coordinate-converter.service';

@NgModule({
  declarations: [AppComponent, EpsgConverterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [CoordinateConverterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
