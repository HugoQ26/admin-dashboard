/* eslint-disable no-unused-vars */
import { select, templates, classNames } from '../settings.js';
import utils from '../utils.js';

class Sidenav {
  constructor(sidenavWrapper) {
    const thisSidenav = this;
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
  }

  initActions() {
    const thisSidenav = this;
    const windowWidth = document.documentElement.clientWidth;
    console.log(windowWidth);

    window.addEventListener('resize', function() {
      const windowWidth = document.documentElement.clientWidth;
      const maxWidthM = 991.98;

      if (windowWidth < maxWidthM) {
        thisSidenav.dom.element.classList.add(
          classNames.sidenav.showHideSidenav
        );
      } else {
        thisSidenav.dom.element.classList.remove(
          classNames.sidenav.showHideSidenav
        );
      }
    });

    thisSidenav.dom.hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(window.innerWidth);

      thisSidenav.dom.element.classList.toggle(
        classNames.sidenav.showHideSidenav
      );
    });
  }
}

export default Sidenav;
