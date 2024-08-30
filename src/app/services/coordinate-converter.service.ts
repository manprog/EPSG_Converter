import { Injectable } from '@angular/core';
import proj4 from 'proj4';

const defs = require("proj4js-definitions");

@Injectable({
  providedIn: 'root',
})
export class CoordinateConverterService {
  constructor() {
    // No need to manually define EPSG:29902 if it's loaded via proj4js-defs
  }

  convertToEPSG4326(x: number, y: number, fromEPSG: string): { lat: number; lng: number } {
    const sourceProj = `EPSG:${fromEPSG}`;
    const destProj = 'EPSG:4326';
    proj4.defs(defs);

    const result = proj4(sourceProj, destProj, [x, y]);

    const [lng, lat] = result;

    return { lat, lng };
  }
}
