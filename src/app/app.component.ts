import { Component, OnInit } from '@angular/core';

import { MOCK_WHERE_WE_JET_MARKER } from './mock-data';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "angular-map";

  markers = [];

  coords = {
    latitude: 0,
    longitude: 0
  };
  constructor() {}

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const newObj = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        };
        this.coords = newObj;
      });
    }
    this.getAllMarkers();
  }

  getAllMarkers() {
    Object.keys(MOCK_WHERE_WE_JET_MARKER).forEach(item => {
      this.markers.push({
        markerId: item,
        coords: MOCK_WHERE_WE_JET_MARKER[item]
      });
    });
  }

  onMapClick(clickedCoordinate) {
    console.log("Cluster details for", clickedCoordinate);
  }
}



