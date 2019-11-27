/* eslint-disable no-unused-vars */
import { select, templates } from '../settings.js';
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

    // thisSidenav.dom.element = document.querySelector('sidenav');

    // thisSidenav.dom.dropdown = document.querySelector(select.dropdown.dropdown);

    // thisSidenav.dom.dropdownMenu = document.querySelector(
    //   select.dropdown.dropdownMenu
    // );

    // thisSidenav.dom.quitButton = thisSidenav.dom.element.querySelector(
    //   select.dropdown.quitButton
    // );

    // thisSidenav.dom.quitPop = document.querySelector(select.dropdown.quitPop);
  }

  initActions() {
    const thisSidenav = this;

    // thisSidenav.dom.dropdown.addEventListener('click', function() {
    //   thisSidenav.dom.dropdownMenu.classList.toggle('show');
    // });

    // thisSidenav.dom.quitButton.addEventListener('click', function() {
    //   thisSidenav.dom.quitPop.classList.toggle('show');
    // });
  }
}

export default Sidenav;
