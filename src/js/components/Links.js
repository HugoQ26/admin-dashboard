/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Links {
  constructor(linksWrapper, data) {
    const thisLinks = this;
    thisLinks.render(linksWrapper, data);
    thisLinks.getElements();
    thisLinks.initActions(data);
  }

  render(element, data) {
    const thisLinks = this;

    const generatedHTML = templates.links(data.links);
    thisLinks.dom = {};
    thisLinks.dom.wrapper = element;

    thisLinks.element = utils.createDOMFromHTML(generatedHTML);
    thisLinks.dom.wrapper.appendChild(thisLinks.element);
  }

  getElements() {
    const thisLinks = this;

    thisLinks.linksLink = document.querySelectorAll(select.links.link);
    thisLinks.editLink = document.querySelectorAll(select.links.editLink);
    thisLinks.deleteLinkIcons = document.querySelectorAll(
      select.links.deleteLink
    );
  }

  initActions(data) {
    const thisLinks = this;

    for (const deleteBtn of thisLinks.deleteLinkIcons) {
      deleteBtn.addEventListener('click', function() {
        const index = this.id.slice(6);

        data.links.splice(index, 1);

        thisLinks.dom.wrapper.innerHTML = '';
        thisLinks.render(thisLinks.dom.wrapper, data);
        thisLinks.getElements();
        thisLinks.initActions(data);
      });
    }
  }
}

export default Links;
