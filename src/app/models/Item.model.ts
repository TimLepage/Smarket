import L from "leaflet"

export class Item {

  private id: number;
  private inCart: boolean;
  private inList: boolean;

  constructor(id: number/* Starts at 1*/, private name: String, private price: number, private position: L.latLng) {
    if (id <= 0) {
      throw new Error('id should be strictly positive');
    } else {
      this.id = id;
    }
    this.inCart = false;
    this.inList = true;
  }

  public addToCart() {
    this.inCart = true;
  }

  public removeFromCart() {
    this.inCart = false;
  }

  public addToList() {
    this.inList = true;
  }

  public removeFromList() {
    this.inList = false;
  }

  public isInList(): boolean {
    return this.inList;
  }

  public isInCart(): boolean {
    return this.inCart;
  }

  public getName(): String {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }

  public getId(): any {
    return this.id;
  }

  public getPosition(): L.latLng {
    return this.position;
  }

  public setPosition(position: L.latLng): void {
    this.position = position;
  }

}
