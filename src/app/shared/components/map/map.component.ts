import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';
import { MAPBOX_TOKEN } from 'src/constants';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: mapboxgl.Map | null = null;
  private polygonDrawControls: MapboxDraw | null = null;
  private lat = 37.75; // широта
  private lng = -122.41; // долгота
  private baseColor = '#faafee';
  private baseHeight = 15;
  private sourceId: string | null = null;

  public exstutionForm: FormGroup | null = null;

  public ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: MAPBOX_TOKEN,
      container: 'map-wrap',
      zoom: 13,
      pitch: 50,
      center: [this.lng, this.lat],
      logoPosition: 'top-left',
    });

    this.polygonDrawControls = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
          polygon: true,
          trash: true
      },
      defaultMode: 'draw_polygon'
    });

    const zoomControls = new mapboxgl.NavigationControl();

    this.map.addControl(zoomControls, 'top-left');
    this.map.addControl(this.polygonDrawControls, 'top-left');
  }

  public extrude() {
    const selectedItems = this.polygonDrawControls?.getSelected();
    // If some of polygons had been selected
    if (selectedItems) {
      selectedItems.features.map((item) => {
        // Create sourse for polygon
        this.sourceId = String(item.id);
        const source = this.map?.getSource(this.sourceId);

        if (!source) {
          this.map?.addSource(this.sourceId, {
            "type": "geojson",
            "data": selectedItems
          });
        }

        // Create layer for exstrude current polygon
        this.map?.addLayer({
          'id': this.sourceId,
          'type': 'fill-extrusion',
          'source': this.sourceId,
          'paint': {
              'fill-extrusion-color': this.baseColor,
              'fill-extrusion-height': this.baseHeight,
          }
        });
        this.polygonDrawControls?.delete(this.sourceId);

        this.exstutionForm = new FormGroup({
          color: new FormControl(this.baseColor),
          height: new FormControl(this.baseHeight),
        });
      })
    }
  }

  public editExstruded() {
    if (this.sourceId && this.exstutionForm) {
      this.map?.setPaintProperty(this.sourceId, 'fill-extrusion-color', this.exstutionForm.value.color);
      this.map?.setPaintProperty(this.sourceId, 'fill-extrusion-height', this.exstutionForm.value.height);
    }
  }
}
