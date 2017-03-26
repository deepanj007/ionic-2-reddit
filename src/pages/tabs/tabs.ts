import { Component } from '@angular/core';

import { RedditPage } from '../reddits/reddits';
import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RedditPage;
  tab2Root: any = SettingsPage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
