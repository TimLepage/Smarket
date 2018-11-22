import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Item } from '../../app/models/Item.model';
import { ItemService } from '../../app/services/item.service';
import { Subscription } from 'rxjs/Subscription';

import L from 'leaflet';

@Component({
  selector: 'page-liste',
  templateUrl: 'liste.html'
})
export class ListePage implements OnInit {

  /**
   * List of items
   */
  private items: Item[];
  private itemSubscription: Subscription;

  /**
   * Amount of money worth in cart
   */
  private totalPrice: number;
  private totalPriceSubscription: Subscription;

  private currentTab: string = 'List';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private itemsService: ItemService) { }

  ngOnInit(): void {
    this.itemSubscription = this.itemsService.itemsSubject.subscribe((items: Item[]) => this.items = items);
    this.totalPriceSubscription = this.itemsService.totalPriceSubject.subscribe((price: number) => this.totalPrice = price);

    // In order to actually "get" values, via emissions
    this.itemsService.emitWholeItemSubject();
  }

  private getListToDisplay(): Item[] {
    // console.log(this.currentTab);

    switch (this.currentTab) {
      case 'List':
        console.log(this.items.filter(item => item.isInList()));
        return this.items.filter(item => item.isInList());
      case 'Cart':
        console.log(this.items.filter(item => item.isInCart()));
        return this.items.filter(item => item.isInCart());
    }

  }

  /**
   * Fired when an item from the list is added to cart
   */
  private onAddToCart(item: Item): void {
    this.itemsService.moveItemFromListToCart(item);
  }

  /**
   * Fired when an item from the list is removed from list
   */
  private onRemove(item: Item): void {
    console.log(this.currentTab);

    switch (this.currentTab) {
      case "List":
        this.itemsService.removeItemFromList(item);
      case "Cart":
        this.itemsService.moveItemFromCartToList(item);
    }
  }

  doPrompt() {
    let al = this.alertCtrl.create({
      title: 'Ajouter un élément à votre liste',
      message: 'Entrez un élément à ajouter à la liste',
      inputs: [
        {
          name: 'name',
          placeholder: 'item'
        },
        {
          name: 'price',
          placeholder: 'price'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
          }
        },
        {
          text: 'Ajouter',
          handler: data => {
            this.itemsService.addItem(data.name.trim(), parseFloat(data.price.trim()), new L.latLng())
          }
        }
      ]
    });
    al.present();
  }

}
