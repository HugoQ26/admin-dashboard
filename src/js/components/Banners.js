/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { templates } from '../settings.js';
import utils from '../utils.js';

class Banners {
  constructor(bannersWrapper) {
    const thisBanners = this;
    thisBanners.render(bannersWrapper);
    thisBanners.getElements();
    thisBanners.initActions();
  }

  render(element) {
    const thisBanners = this;
    const generatedHTML = templates.banners();
    thisBanners.dom = {};
    thisBanners.dom.wrapper = element;

    thisBanners.element = utils.createDOMFromHTML(generatedHTML);
    thisBanners.dom.wrapper.appendChild(thisBanners.element);
  }

  getElements() {
    const thisBanners = this;
  }

  initActions() {
    const thisBanners = this;
  }
}

export default Banners;
