import { Component } from '@angular/core';

import { ListePage } from '../liste/liste';

import { ScanPage } from '../scan/scan';
import { FluxPage } from '../flux/flux';
import { MapPage } from '../map/map';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FluxPage;
  tab2Root = ListePage;
  tab3Root = ScanPage;
  tab4Root = MapPage;
  tab5Root = SettingsPage;

  constructor() {

  }
}
