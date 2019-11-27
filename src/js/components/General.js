/* eslint-disable no-unused-vars */
import { select, templates } from '../settings.js';
import utils from '../utils.js';

class General {
  constructor(generalWrapper) {
    const thisGeneral = this;
    thisGeneral.render(generalWrapper);
    thisGeneral.getElements();
    thisGeneral.initActions();
  }

  render(element) {
    const thisGeneral = this;
    const generatedHTML = templates.general();
    thisGeneral.dom = {};
    thisGeneral.dom.wrapper = element;

    thisGeneral.element = utils.createDOMFromHTML(generatedHTML);
    thisGeneral.dom.wrapper.appendChild(thisGeneral.element);
  }

  getElements() {
    const thisGeneral = this;

    // thisGeneral.dom.element = document.querySelector('general');

    // thisGeneral.dom.dropdown = document.querySelector(select.dropdown.dropdown);

    // thisGeneral.dom.dropdownMenu = document.querySelector(
    //   select.dropdown.dropdownMenu
    // );

    // thisGeneral.dom.quitButton = thisGeneral.dom.element.querySelector(
    //   select.dropdown.quitButton
    // );

    // thisGeneral.dom.quitPop = document.querySelector(select.dropdown.quitPop);
  }

  initActions() {
    const thisGeneral = this;

    // thisGeneral.dom.dropdown.addEventListener('click', function() {
    //   thisGeneral.dom.dropdownMenu.classList.toggle('show');
    // });

    // thisGeneral.dom.quitButton.addEventListener('click', function() {
    //   thisGeneral.dom.quitPop.classList.toggle('show');
    // });
  }
}

export default General;
