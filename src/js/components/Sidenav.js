/* eslint-disable no-unused-vars */
import { select, templates, classNames } from '../settings.js';
import utils from '../utils.js';

class Sidenav {
  constructor(sidenavWrapper) {
    const thisSidenav = this;
    thisSidenav.maxWidthM = 991.98;
    thisSidenav.render(sidenavWrapper);
    thisSidenav.getElements();
    thisSidenav.initActions();
  }

  render(element) {
    const thisSidenav = this;
    const generatedHTML = templates.sidenav();
    thisSidenav.dom = {};
    thisSidenav.dom.wrapper = element;

    thisSidenav.element = utils.createDOMFromHTML(generatedHTML);
    thisSidenav.dom.wrapper.appendChild(thisSidenav.element);
  }

  getElements() {
    const thisSidenav = this;

    thisSidenav.dom.element = document.querySelector(
      select.containerOf.sidenav
    );

    thisSidenav.dom.hamburger = thisSidenav.dom.wrapper.querySelector(
      select.sidenav.hamburger
    );

    thisSidenav.dom.pages = document.querySelector(select.containerOf.mainPage);
  }

  resizePage() {
    const thisSidenav = this;

    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth < thisSidenav.maxWidthM) {
      thisSidenav.dom.element.classList.add(classNames.sidenav.hideSidenav);
      thisSidenav.dom.pages.classList.add(classNames.pages.pagesFullWidth);
    } else {
      thisSidenav.dom.element.classList.remove(classNames.sidenav.hideSidenav);
      thisSidenav.dom.pages.classList.remove(classNames.pages.pagesFullWidth);
    }
  }

  initActions() {
    const thisSidenav = this;
    const windowWidth = document.documentElement.clientWidth;

    thisSidenav.resizePage();

    window.addEventListener('resize', this.resizePage.bind(this));

    thisSidenav.dom.hamburger.addEventListener('click', function(e) {
      e.preventDefault();

      if (windowWidth > thisSidenav.maxWidthM) {
        thisSidenav.dom.pages.classList.toggle(classNames.pages.pagesFullWidth);
      }

      thisSidenav.dom.element.classList.toggle(classNames.sidenav.hideSidenav);
    });
  }
}

export default Sidenav;
