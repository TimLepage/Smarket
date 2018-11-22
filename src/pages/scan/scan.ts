import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import * as request from "request-promise-native";
import { ItemService } from '../../app/services/item.service';
import { Item } from '../../app/models/Item.model';
import { LocalisationService } from '../../app/services/localisation.service'


@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {

  scannedString: string;

  constructor(public navCtrl: NavController,
    private itemsService: ItemService,
    public alertCtrl: AlertController,
    private barcodeScanner: BarcodeScanner,
    private localisationService: LocalisationService) {
  }

  ionViewDidEnter() {
    this.scan();
  }

  scan() {
    this.barcodeScanner.scan().then(data => {
      if (!data.cancelled) {
        this.request(data.text);
      }
    });

  }

  askAddItemPrompt(product_name: String) {
    let price: number = parseFloat((Math.random() * 10).toFixed(2));
    let alert = this.alertCtrl.create({
      title: 'Article hors liste',
      message: 'Voulez vous ajouter cet article : ' + product_name + ' (' + price + ')' + ' à votre panier ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Ajouter',
          handler: () => {
            this.itemsService.addNewItemtoCart(product_name, price, this.localisationService.getUserPosition());
          }
        }
      ]
    });
    alert.present();
  }

  private async request(barcode: string) { //fait la requête HTTP à l'api openfoodfacts et retire de la liste l'article retourné
    if (!barcode) {
      return;
    }
    document.getElementById('loadingGif').style.display = 'block';
    const baseUrl: string = 'https://fr.openfoodfacts.org/api/v0/produit/';
    const queryString: string = barcode;
    const endUrl: string = '.json';
    var option = {
      uri: baseUrl.concat(queryString, endUrl),
    };
    const result = await request.get(option);
    var article = JSON.parse(result);
    console.log(article.product.product_name);
    var item: Item = this.itemsService.getItemFromName(article.product.product_name.toLowerCase());
    if (item) {
      this.itemsService.moveItemFromListToCart(item);
    }
    else { //Si l'article scanné n'est pas dans la liste on propose à l'utilisateur de l'ajouter au panier
      this.askAddItemPrompt(article.product.product_name);
    }
    document.getElementById('loadingGif').style.display = 'none';
  }
}
