/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Header from './components/Header.js';
import Sidenav from './components/Sidenav.js';
import General from './components/General.js';
import Details from './components/Details.js';
import Links from './components/Links.js';
import Banners from './components/Banners.js';
import Payout from './components/Payout.js';
import Postback from './components/Postback.js';

import PersonalData from './components/PersonalData.js';
import { select, classNames } from './settings.js';

const app = {
  init: function() {
    const thisApp = this;
    thisApp.initData();
    thisApp.initHeader();
    thisApp.initSideNav();
    thisApp.initGeneral();
    thisApp.initDetails();
    thisApp.initLinks();
    thisApp.initBanners();
    thisApp.initPersonaData();
    thisApp.initPayout();
    thisApp.initPostback();
    thisApp.initPages();
  },

  initPersonaData() {
    const thisApp = this;

    thisApp.personalData = document.querySelector(
      select.containerOf.personalData
    );
    const header = new PersonalData(thisApp.personalData, thisApp.data[0]);
  },

  initData: function() {
    const thisApp = this;

    thisApp.data = [
      {
        id: 1,
        name: 'John',
        surname: 'Rambo',
        email: 'john.rambo@war.org',
        phone: '+1234353252',
        skype: '',
        icq: '',
        msn: '',
        wallet: faker.finance.amount(),
        password: '',
        links: [],
        payout: []
      }
    ];

    for (const user of thisApp.data) {
      for (let link = 0; link < 10; link++) {
        const url = faker.internet.url();
        const name = url.slice(8);
        user.links.push({ url, name });
      }
      for (let payout = 0; payout < 50; payout++) {
        const date = `${faker.date.past()}`.slice(0, -50);
        const amount = faker.finance.amount();
        const deal = 'cpl(200)';
        const account = 'bank';
        user.payout.push({ date, amount, deal, account });
      }
    }
  },

  initHeader: function() {
    const thisApp = this;

    thisApp.header = document.querySelector(select.containerOf.header);
    const header = new Header(thisApp.header, thisApp.data[0]);
  },

  initSideNav: function() {
    const thisApp = this;

    thisApp.sidenav = document.querySelector(select.containerOf.sidenav);
    const sidenav = new Sidenav(thisApp.sidenav);
  },

  initGeneral: function() {
    const thisApp = this;

    thisApp.general = document.querySelector(select.containerOf.general);

    const general = new General(thisApp.general);
  },

  initDetails: function() {
    const thisApp = this;

    thisApp.details = document.querySelector(select.containerOf.details);

    const details = new Details(thisApp.details);
  },

  initLinks: function() {
    const thisApp = this;
    thisApp.links = document.querySelector(select.containerOf.links);
    const links = new Links(thisApp.links, thisApp.data[0]);
  },

  initBanners: function() {
    const thisApp = this;

    thisApp.banners = document.querySelector(select.containerOf.banners);

    const banners = new Banners(thisApp.banners);
  },

  initPayout: function() {
    const thisApp = this;

    thisApp.payout = document.querySelector(select.containerOf.payout);

    const payout = new Payout(thisApp.payout, thisApp.data[0]);
  },

  initPostback: function() {
    const thisApp = this;

    thisApp.postback = document.querySelector(select.containerOf.postback);

    const postback = new Postback(thisApp.postback);
  },

  initPages: function() {
    const thisApp = this;

    const maxWidthM = 991.98;
    const windowWidth = document.documentElement.clientWidth;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;

    thisApp.navLinks = document.querySelectorAll(select.sidenav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (const page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (const link of thisApp.navLinks) {
      link.addEventListener('click', function(event) {
        event.preventDefault();

        /* get page id from href attribute */
        const id = link.getAttribute('href').replace('#', '');

        /* run thisApp.activeatePage with that id */
        thisApp.activatePage(id);

        if (windowWidth < maxWidthM) {
          thisApp.sidenav.classList.add(classNames.sidenav.hideSidenav);
        }
      });
    }
  },

  activatePage: function(pageId) {
    const thisApp = this;

    /* add class active to matching pages, remove from non-matching */
    for (const page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    /* add class active to matching links, remove from non-matching */
    for (const link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.sidenav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
    /* change URL hash */
    window.location.hash = '#/' + pageId;
  }
};

app.init();
