/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Header from './components/Header.js';
import Sidenav from './components/Sidenav.js';
import General from './components/General.js';
import Links from './components/Links.js';
import PersonalData from './components/PersonalData.js';
import { select, classNames } from './settings.js';

const app = {
  init: function() {
    const thisApp = this;
    thisApp.initData();
    thisApp.initHeader();
    thisApp.initSideNav();
    thisApp.initGeneral();
    thisApp.initLinks();
    thisApp.initPages();
    thisApp.initPersonaData();
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
        links: []
      }
    ];

    for (const user of thisApp.data) {
      for (let link = 0; link < 10; link++) {
        const url = faker.internet.url();
        const name = url.slice(8);

        user.links.push({ url, name });
      }
    }
    console.log(thisApp.data);
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

  initLinks: function() {
    const thisApp = this;
    thisApp.links = document.querySelector(select.containerOf.links);
    const links = new Links(thisApp.links, thisApp.data[0]);
  },

  initPages: function() {
    const thisApp = this;

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
