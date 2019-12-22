/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { templates } from '../settings.js';
import utils from '../utils.js';

class Details {
  constructor(detailsWrapper) {
    const thisDetails = this;
    thisDetails.render(detailsWrapper);
    thisDetails.getElements();
    thisDetails.initActions();
  }

  render(element) {
    const thisDetails = this;
    const generatedHTML = templates.details();
    thisDetails.dom = {};
    thisDetails.dom.wrapper = element;

    thisDetails.element = utils.createDOMFromHTML(generatedHTML);
    thisDetails.dom.wrapper.appendChild(thisDetails.element);
  }

  getElements() {
    const thisDetails = this;
  }

  initActions() {
    const thisDetails = this;
  }
}

export default Details;
