/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Links {
  constructor(linksWrapper) {
    const thisLinks = this;
    thisLinks.initData();
    thisLinks.render(linksWrapper);
    // thisLinks.getElements();
    // thisLinks.initActions();
  }

  render(element) {
    const thisLinks = this;
    const generatedHTML = templates.links(thisLinks.urls);
    thisLinks.dom = {};
    thisLinks.dom.wrapper = element;

    thisLinks.element = utils.createDOMFromHTML(generatedHTML);
    thisLinks.dom.wrapper.appendChild(thisLinks.element);
  }

  initData() {
    const thisLinks = this;
    thisLinks.urls = [];
    console.log(faker.random.uuid());

    for (let i = 0; i < 10; i++) {
      const url = faker.internet.url();
      const name = url.slice(8);

      thisLinks.urls.push({ url, name });
    }
  }

  //   getElements() {
  //     const thisLinks = this;
  //   }

  //   initActions() {
  //     const thisLinks = this;
  //   }
}

export default Links;
