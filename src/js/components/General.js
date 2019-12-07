/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { select, templates } from '../settings.js';
import utils from '../utils.js';

class General {
  constructor(generalWrapper) {
    const thisGeneral = this;
    thisGeneral.render(generalWrapper);
    thisGeneral.getElements();
    thisGeneral.initChart();
    thisGeneral.initActions();
  }

  render(element) {
    const thisGeneral = this;
    const generatedHTML = templates.general();
    thisGeneral.dom = {};
    thisGeneral.dom.wrapper = element;

    thisGeneral.element = utils.createDOMFromHTML(generatedHTML);
    thisGeneral.dom.wrapper.appendChild(thisGeneral.element);
  }

  initChart() {
    const ctx = document.getElementById('myChart').getContext('2d');

    var chart = new Chart(ctx, {
      // 1
      type: 'bar',
      data: {
        // 2
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        // 3
        datasets: [
          {
            // 4
            label: 'Signups',
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88]
          },
          {
            label: 'FTD',
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76]
          },
          {
            label: 'Earned',
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
            // 7
            hidden: true
          }
        ]
      }
    });
  }

  getElements() {
    const thisGeneral = this;
  }

  initActions() {
    const thisGeneral = this;
  }
}

export default General;
