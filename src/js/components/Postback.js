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
  }

  initActions() {
    const thisPostback = this;
  }
}

export default Postback;
