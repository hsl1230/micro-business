import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Events, MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { UserDataService } from './providers/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  appPages = [
    {
      title: 'Dashboard',
      url: '/app/tabs/(dashboard:dashboard)',
      icon: 'home'
    },
    {
      title: 'My Posts',
      url: '/app/tabs/(posts:posts)',
      icon: 'list'
    },
    {
      title: 'My Favourites',
      url: '/app/tabs/(favourites:favourites)',
      icon: 'heart'
    },
    {
      title: 'My Schedules',
      url: '/app/tabs/(shedules:shedules)',
      icon: 'calendar'
    },
    {
      title: 'My Messages',
      url: '/app/tabs/(messages:messages)',
      icon: 'chatbubbles'
    }
  ];
  loggedIn = false;

  constructor(
    private events: Events,
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserDataService
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.checkLoginStatus();
    this.listenForLoginEvents();
  }

  ngOnDestroy(): void {
    this.events.unsubscribe('user:login');
    this.events.unsubscribe('user:signup');
    this.events.unsubscribe('user:logout');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  navigate(url: string) {
    return this.router.navigateByUrl(url);
  }

  logout() {
    this.userData.logout().then(() => {
      return this.navigate('/app/tabs/(schedule:schedule)');
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', 'false');
    this.router.navigateByUrl('/tutorial');
  }
}

