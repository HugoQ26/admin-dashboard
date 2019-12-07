/* eslint-disable no-unused-vars */
import { select, templates } from '../settings.js';
import utils from '../utils.js';
import Header from './Header.js';

class PersonalData {
  constructor(personalDataWrapper, data) {
    const thisPersonalData = this;
    thisPersonalData.render(personalDataWrapper, data);
    thisPersonalData.getElements();
    thisPersonalData.initActions(data);
  }

  render(element, data) {
    const thisPersonalData = this;

    const generatedHTML = templates.personalData(data);
    console.log(element);
    thisPersonalData.dom = {};
    thisPersonalData.dom.wrapper = element;

    thisPersonalData.element = utils.createDOMFromHTML(generatedHTML);
    thisPersonalData.dom.wrapper.appendChild(thisPersonalData.element);
    console.log(data);
  }

  getElements() {
    const thisPersonalData = this;

    thisPersonalData.form = document.querySelector(select.personalData.form);
    thisPersonalData.header = document.querySelector(select.containerOf.header);
  }

  initActions(data) {
    const thisPersonalData = this;

    thisPersonalData.form.addEventListener('submit', function(e) {
      e.preventDefault();
      for (const input of e.target) {
        data[input.name] = input.value;
      }
      console.log('dataaa', data);

      thisPersonalData.header.innerHTML = '';
      const newHeader = new Header(thisPersonalData.header, data);

      thisPersonalData.dom.wrapper.innerHTML = '';
      thisPersonalData.render(thisPersonalData.dom.wrapper, data);
      thisPersonalData.getElements();
      thisPersonalData.initActions(data);
    });
  }
}

export default PersonalData;
