/* eslint-disable no-unused-vars */
import Header from './components/Header.js';

const app = {
  init: function() {
    const thisApp = this;
    thisApp.initHeader();
  },

  initHeader: function() {
    const header = new Header();
  }
};

app.init();
