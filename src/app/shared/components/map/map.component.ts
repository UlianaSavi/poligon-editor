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
  private drawControls: MapboxDraw | null = null;
  private lat = 37.75; // широта
  private lng = -122.41; // долгота

  public ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: MAPBOX_TOKEN,
      container: 'map-wrap',
      zoom: 13,
      center: [this.lng, this.lat],
      logoPosition: 'top-left',
    });

    this.drawControls = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
          polygon: true,
          trash: true
      },
      defaultMode: 'draw_polygon'
    });

    const zoomControls = new mapboxgl.NavigationControl();

    this.map.addControl(zoomControls, 'top-left');
    this.map.addControl(this.drawControls, 'top-left');
  }

  public extrude() {
    if (this.drawControls) {
      const selectedItems = this.drawControls.getSelected();
      selectedItems.features.map((item) => {
        const sourceId = `sourceId_${String(item.id)}`;

        this.map?.addSource(sourceId, {
          "type": "geojson",
          "data": item
        });

        const source = this.map?.getSource(sourceId);

        if (source) {
          this.map?.addLayer({
            'id': `layerId_${String(item.id)}`,
            'type': 'fill-extrusion',
            'source': sourceId,
            'paint': {
                'fill-extrusion-color': '#aaa',
                'fill-extrusion-height': 15,
            }
          });
        }
      })
    }
  }
}
