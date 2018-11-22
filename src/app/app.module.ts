import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { FluxPage } from '../pages/flux/flux';
import { ListePage } from '../pages/liste/liste';
import { MapPage } from '../pages/map/map';
import { MyApp } from './app.component';
import { ScanPage } from '../pages/scan/scan';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

import { ItemService } from './services/item.service';
import { LocalisationService } from './services/localisation.service';

@NgModule({
  declarations: [
    MyApp,
    ListePage,
    ScanPage,
    FluxPage,
    MapPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListePage,
    ScanPage,
    FluxPage,
    MapPage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    ItemService,
    LocalisationService,
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
