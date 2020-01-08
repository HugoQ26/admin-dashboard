/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { templates } from '../settings.js';
import utils from '../utils.js';

class Payout {
  constructor(payoutWrapper, { payout }) {
    const thisPayout = this;
    thisPayout.render(payoutWrapper, payout);
    thisPayout.getElements();
    thisPayout.initActions(payout);
  }

  render(element, payout) {
    const thisPayout = this;

    const generatedHTML = templates.payout(payout);
    thisPayout.dom = {};
    thisPayout.dom.wrapper = element;

    thisPayout.element = utils.createDOMFromHTML(generatedHTML);
    thisPayout.dom.wrapper.appendChild(thisPayout.element);
  }

  getElements() {
    const thisPayout = this;
  }

  initActions(payout) {
    const thisPayout = this;
  }
}

export default Payout;
