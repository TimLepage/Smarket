import { Component, ViewChild, ElementRef } from '@angular/core';

import L from "leaflet";
import { Item } from '../../app/models/Item.model';
import { Subscription } from 'rxjs/Subscription';
import { ItemService } from '../../app/services/item.service';

@Component({
  selector: 'map-page',
  templateUrl: 'map.html'
})
/**
 * Map page class.
 *
 * @class      MapPage (name)
 */
export class MapPage {




  @ViewChild('map') mapElement: ElementRef;

  /**
   * Leaflet map
   */
  private map: L.Map;

  /**
   * Leaflet map center
   */
  private center: L.PointTuple;

  /**
   * List of items to gather
   */
  private items: Item[];

  private itemSubscription: Subscription;

  constructor(private itemsService: ItemService) { }

  ionViewDidLoad() {
    //set map center
    this.center = [45.184604, 5.752280]; //Polytech

    this.itemSubscription = this.itemsService.itemsSubject.subscribe(
      (items: Item[]) => {
        this.items = items;
      });
    // In order to actually "get" items, via an emission
    this.itemsService.emitWholeItemSubject();
    this.initMap();
  }

  /**
   * Initialise map : create it, configure it and center it on received location
   */
  initMap(): void {
    this.map = L.map('map', {
      center: this.center,
      zoom: 13
    });

    L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attributionControl: false
    }).addTo(this.map);

    this.map.removeControl(this.map.attributionControl);
    this.map.locate({ setView: true, maxZoom: 17 });

    this.map.on('locationerror', this.onLocationError);
    this.map.on('locationfound', (e) => {
      var radius = e.accuracy / 2;

      L.circle(e.latlng, radius).addTo(this.map);

      for (let item of this.items) {
        let itemPosition: L.latLng = new L.latLng(e.latlng.lat + 0.0002 * item.getId(), e.latlng.lng + 0.0002 * item.getId());
        this.itemsService.setItemPosition(item, itemPosition);
        let currentMarker: L.marker = L.marker(item.getPosition()).addTo(this.map)
          .bindPopup(item.getName() + " " + item.getPrice() + "€").openPopup()
          .on('contextmenu', (e) => {
            this.itemsService.moveItemFromListToCart(item);
            this.map.removeLayer(currentMarker);
          });
      }

    });

  }

  onLocationError(e) {
    alert(e.message);
  }

  ionViewWillUnload() {
    this.itemSubscription.unsubscribe();
  }


}
