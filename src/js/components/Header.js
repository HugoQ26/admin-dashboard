import { select } from '../settings.js';

class Header {
  constructor() {
    const thisHeader = this;
    thisHeader.getElements();
    thisHeader.initActions();
  }

  getElements() {
    const thisHeader = this;
    thisHeader.dom = {};

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
