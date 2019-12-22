/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { templates } from '../settings.js';
import utils from '../utils.js';

class Payout {
  constructor(payoutWrapper) {
    const thisPayout = this;
    thisPayout.render(payoutWrapper);
    thisPayout.getElements();
    thisPayout.initActions();
  }

  render(element) {
    const thisPayout = this;
    const generatedHTML = templates.payout();
    thisPayout.dom = {};
    thisPayout.dom.wrapper = element;

    thisPayout.element = utils.createDOMFromHTML(generatedHTML);
    thisPayout.dom.wrapper.appendChild(thisPayout.element);
  }

  getElements() {
    const thisPayout = this;
  }

  initActions() {
    const thisPayout = this;
  }
}

export default Payout;
