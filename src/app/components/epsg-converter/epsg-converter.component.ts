import { Component } from '@angular/core';
import { CoordinateConverterService } from '../../services/coordinate-converter.service';

@Component({
  selector: 'app-epsg-converter',
  templateUrl: './epsg-converter.component.html',
  styleUrls: ['./epsg-converter.component.css']
})
export class EpsgConverterComponent {
  fromEPSG: string = '3857'; // Default to EPSG:3857 (Web Mercator)
  xCoord: number = 97516;
  yCoord: number = 143866;
  convertedCoords: { lat: number; lng: number } | null = null;

  constructor(private converterService: CoordinateConverterService) {}

  onConvert() {
    this.convertedCoords = this.converterService.convertToEPSG4326(this.xCoord, this.yCoord, this.fromEPSG);
  }
}
