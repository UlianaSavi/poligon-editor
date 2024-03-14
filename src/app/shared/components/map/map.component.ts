import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';
import { MAPBOX_TOKEN } from 'src/constants';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: mapboxgl.Map | null = null;
  private style = 'mapbox://styles/mapbox/streets-v11';
  private lat = 37.75;
  private lng = -122.41;

  constructor() { }
  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: MAPBOX_TOKEN,
      container: 'map',
      zoom: 13,
      center: [this.lng, this.lat]
    });

    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(new mapboxgl.FullscreenControl());

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
          polygon: true,
          trash: true
      },
      defaultMode: 'draw_polygon'
    });
    this.map.addControl(draw);
  }}
