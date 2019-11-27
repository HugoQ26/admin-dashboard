/* eslint-disable no-unused-vars */
import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Header {
  constructor(headerWrapper) {
    const thisHeader = this;
    thisHeader.render(headerWrapper);
    thisHeader.getElements();
    thisHeader.initActions();
  }

  render(element) {
    const thisHeader = this;
    const generatedHTML = templates.header();
    thisHeader.dom = {};
    thisHeader.dom.wrapper = element;

    thisHeader.element = utils.createDOMFromHTML(generatedHTML);
    thisHeader.dom.wrapper.appendChild(thisHeader.element);
  }

  getElements() {
    const thisHeader = this;

    thisHeader.dom.element = document.querySelector('header');

    thisHeader.dom.dropdown = document.querySelector(select.dropdown.dropdown);

    thisHeader.dom.dropdownMenu = document.querySelector(
      select.dropdown.dropdownMenu
    );

    thisHeader.dom.quitButton = thisHeader.dom.element.querySelector(
      select.dropdown.quitButton
    );

    thisHeader.dom.quitPop = document.querySelector(select.dropdown.quitPop);
  }

  initActions() {
    const thisHeader = this;

    thisHeader.dom.dropdown.addEventListener('click', function() {
      thisHeader.dom.dropdownMenu.classList.toggle('show');
    });

    thisHeader.dom.quitButton.addEventListener('click', function() {
      thisHeader.dom.quitPop.classList.toggle('show');
    });
  }
}

export default Header;
