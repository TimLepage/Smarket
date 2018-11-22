import { Item } from "../models/Item.model";
import L from "leaflet";
import { Subject } from "rxjs/Subject";

export class ItemService {

  private totalPrice: number;
  private numberItems: number;

  private items: Item[] = [
    new Item(1, 'Poitrine fumée', 2.31, new L.latLng()),
    new Item(2, 'Oeufs', 1.88, new L.latLng()),
    new Item(3, 'Pain de mie', 0.93, new L.latLng()),
  ]

  public itemsSubject: Subject<Item[]> = new Subject();

  public totalPriceSubject: Subject<number> = new Subject();

  constructor() { }

  /**
   * 'Updates' items subject with new version of items list
   * To be called after every significant update of items list
   */
  public emitWholeItemSubject() {
    this.itemsSubject.next(this.items.slice());
    this.totalPriceSubject.next(this.getSumInCart());
  }

  public addItem(name: String, price: number, position: L.latLng) {
    this.numberItems = this.items.push(new Item(this.items.length + 1, name, price, position));
    this.emitWholeItemSubject();
  }

  public addItemFromItem(item: Item) {
    this.numberItems = this.items.push(item);
    this.emitWholeItemSubject();
  }

  public setItemPosition(item: Item, position: L.latLng) {
    item.setPosition(position);
    this.emitWholeItemSubject();
  }

  public moveItemFromListToCart(item: Item) {
    item.removeFromList();
    item.addToCart();
    this.emitWholeItemSubject();
  }

  public moveItemFromCartToList(item: Item) {
    item.removeFromCart();
    item.addToList();
    this.emitWholeItemSubject();
  }

  public addItemToCart(item: Item) {
    item.addToCart();
    this.emitWholeItemSubject();
  }

  public removeItemFromList(item: Item) {
    var index = this.items.indexOf(item);
    if (index !== -1) this.items.splice(index, 1);
    item.removeFromList();
    this.emitWholeItemSubject();
  }

  public removeItemFromCart(item: Item) {
    item.removeFromCart();
    this.emitWholeItemSubject();
  }

  public addNewItemtoCart(name: String, price: number, position: L.latLng) {
    let item: Item = new Item(this.items.length + 1, name, price, position);
    this.addItemFromItem(item);
    this.moveItemFromListToCart(item);
    this.emitWholeItemSubject();
  }

  public getSumInCart(): number {
    // return reduction on + of list composed of in-cart items' prices
    return this.items.filter(item => item.isInCart()).map(item => item.getPrice()).reduce((a, b) => a + b, 0);
  }

  public getItemFromName(name: String) {
    return this.items.filter(item => item.getName().toLowerCase() === name)[0];
  }

}
