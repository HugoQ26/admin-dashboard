/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { templates } from '../settings.js';
import utils from '../utils.js';

class Postback {
  constructor(postbackWrapper) {
    const thisPostback = this;
    thisPostback.render(postbackWrapper);
    thisPostback.getElements();
    thisPostback.initActions();
  }

  render(element) {
    const thisPostback = this;
    const generatedHTML = templates.postback();
    thisPostback.dom = {};
    thisPostback.dom.wrapper = element;

    thisPostback.element = utils.createDOMFromHTML(generatedHTML);
    thisPostback.dom.wrapper.appendChild(thisPostback.element);
  }

  getElements() {
    const thisPostback = this;

    const rangeSlider = document.getElementById('hours');
    const rangeStart = document.querySelector('.range-start');
    const rangeEnd = document.querySelector('.range-end');
    const rangeDisplayValue = document.querySelector('.range-value');

    const rangeMin = rangeSlider.getAttribute('min');
    const rangeMax = rangeSlider.getAttribute('max');
    const rangeValue = rangeSlider.value;

    rangeSlider.addEventListener('input', function(e) {
      const rangeValue = e.target.value;
      rangeDisplayValue.innerHTML = rangeValue;
    });

    rangeStart.innerHTML = rangeMin;
    rangeEnd.innerHTML = rangeMax;
  }

  initActions() {
    const thisPostback = this;
  }
}

export default Postback;
