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

  public exstrutionForm: FormGroup | null = null;
  public layersExstruded: mapboxgl.AnyLayer[] | [] = [];

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
        const sourceId = String(item.id);
        const source = this.map?.getSource(sourceId);

        if (!source) {
          this.map?.addSource(sourceId, {
            "type": "geojson",
            "data": item
          });
        }

        // Create layer for exstrude current polygon
        this.map?.addLayer({
          'id': sourceId,
          'type': 'fill-extrusion',
          'source': sourceId,
          'paint': {
              'fill-extrusion-color': this.baseColor,
              'fill-extrusion-height': this.baseHeight,
          }
        });
        this.polygonDrawControls?.delete(sourceId);
        this.updateLayersExstruded();
        this.exstrutionForm = new FormGroup({
          sourceId: new FormControl<string>(''),
          color: new FormControl<string>(this.baseColor),
          height: new FormControl<number>(this.baseHeight),
        });
      })
    }
  }

  public editExstruded() {
    if (this.exstrutionForm) {
      this.map?.setPaintProperty(
        this.exstrutionForm.value.sourceId,
        'fill-extrusion-color',
        this.exstrutionForm.value.color);

      this.map?.setPaintProperty(
        this.exstrutionForm.value.sourceId,
        'fill-extrusion-height',
        this.exstrutionForm.value.height);
    }
  }

  public delete() {
    if (this.exstrutionForm) {
      this.map?.removeLayer(this.exstrutionForm.value.sourceId)
      this.map?.removeSource(this.exstrutionForm.value.sourceId)
      this.updateLayersExstruded();
      if (!this.layersExstruded.length) {
        this.exstrutionForm = null;
        return;
      }
      this.exstrutionForm.value.sourceId = '';
    }
  }

  private updateLayersExstruded() {
    this.layersExstruded = this.map?.getStyle().layers.filter((layer) => layer.type === 'fill-extrusion') || []
  }
}
