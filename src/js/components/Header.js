/* eslint-disable no-unused-vars */
/* global faker */
import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Header {
  constructor(headerWrapper, data) {
    const thisHeader = this;
    thisHeader.render(headerWrapper, data);
    thisHeader.getElements();
    thisHeader.initActions();
  }

  render(element, data) {
    const thisHeader = this;

    // const data = {
    //   name: faker.name.findName(),
    //   amount: faker.finance.amount()
    // };

    const generatedHTML = templates.header(data);

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

    thisHeader.dom.name = document.querySelector('#name');

    console.log('aaasas', thisHeader.dom.name);

    thisHeader.dom.quitPop = document.querySelector(select.dropdown.quitPop);
  }

  initActions() {
    const thisHeader = this;

    thisHeader.dom.dropdown.addEventListener('click', function() {
      thisHeader.dom.dropdownMenu.classList.toggle('show');
    });

    thisHeader.dom.quitButton.addEventListener('click', function() {
      thisHeader.dom.quitPop.classList.add('show');
    });

    const clickedName = new Event('click', {
      detail: {
        name: 'dupa'
      }
    });
    thisHeader.dom.name.dispatchEvent(clickedName);

    thisHeader.dom.name.addEventListener('click', function(e) {
      console.log(e.name);
    });
  }
}

export default Header;
