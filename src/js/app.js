/* eslint-disable no-unused-vars */
import Header from './components/Header.js';
import Sidenav from './components/Sidenav.js';
import General from './components/General.js';
import { select } from './settings.js';

const app = {
  init: function() {
    const thisApp = this;
    thisApp.initHeader();
    thisApp.initSideNav();
    thisApp.initGeneral();
  },

  initHeader: function() {
    const thisApp = this;

    thisApp.header = document.querySelector(select.containerOf.header);
    const header = new Header(thisApp.header);
  },

  initSideNav: function() {
    const thisApp = this;

    thisApp.sidenav = document.querySelector(select.containerOf.sidenav);
    const sidenav = new Sidenav(thisApp.sidenav);
  },

  initGeneral: function() {
    const thisApp = this;

    thisApp.general = document.querySelector(select.containerOf.general);
    console.log(thisApp.general);
    const general = new General(thisApp.general);
  }
};

app.init();
