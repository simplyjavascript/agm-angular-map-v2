import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: "app-google-maps",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.scss"]
})
export class GoogleMapsComponent implements OnInit {
  @Input() coords;
  @Input() markers: any[] = [];
  @Output() mapClicked = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
  onMapClick(event) {
    this.mapClicked.emit(event);
  }
}
