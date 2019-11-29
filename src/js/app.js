/* eslint-disable no-unused-vars */
import Header from './components/Header.js';
import Sidenav from './components/Sidenav.js';
import General from './components/General.js';
import Links from './components/Links.js';
import { select, classNames } from './settings.js';

const app = {
  init: function() {
    const thisApp = this;
    thisApp.initHeader();
    thisApp.initSideNav();
    thisApp.initGeneral();
    thisApp.initLinks();
    thisApp.initPages();
  },

  initData: function() {
    const thisApp = this;
    thisApp.data = [
      {
        id: 1,
        name: 'John Rambo',
        links: [{ name: 'Home page', link: 'htttp//:www.homepage.pl' }]
      }
    ];
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
  },

  initLinks: function() {
    const thisApp = this;
    thisApp.links = document.querySelector(select.containerOf.links);
    const links = new Links(thisApp.links);
  },

  initPages: function() {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;

    thisApp.navLinks = document.querySelectorAll(select.sidenav.links);
    console.log('ssssss', thisApp.navLinks);

    const idFromHash = window.location.hash.replace('#/', '');
    console.log('idfromhash: ', idFromHash);

    let pageMatchingHash = thisApp.pages[0].id;
    console.log('pageMatchingHash: ', pageMatchingHash);

    for (const page of thisApp.pages) {
      if (page.id == idFromHash) {
        console.log('page id', page.id);
        console.log('idFromhash', idFromHash);
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
