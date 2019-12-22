/* global Handlebars */
export const select = {
  containerOf: {
    mainPage: '#pages',
    pages: '#pages .container',
    header: '#header',
    sidenav: '#sidenav',
    general: '#general',
    details: '#details',
    links: '#links',
    banners: '#banners',
    personalData: '#personal-data',
    payout: '#payout',
    postback: '#postback'
  },
  templateOf: {
    header: '#template-header',
    sidenav: '#template-sidenav',
    general: '#template-general',
    details: '#template-details',
    links: '#template-links',
    banners: '#template-banners',
    personalData: '#template-personal-data',
    payout: '#template-payout',
    postback: '#template-postback'
  },

  dropdown: {
    dropdown: '.dropdown',
    dropdownMenu: '.dropdown-menu',
    quitButton: '#quitBtn',
    quitPop: '#exit.overlay '
  },

  header: {
    name: '#name',
    overlay: '.overlay'
  },

  sidenav: {
    hamburger: '.hamburger',
    links: '.sidenav-item'
  },

  links: {
    link: '.linksLink',
    editLink: '.edit-link',
    deleteLink: '.delete-link'
  },

  personalData: {
    form: '#personalDataForm'
  }
};

export const classNames = {
  sidenav: {
    hideSidenav: 'hideSidenav',
    active: 'active'
  },
  pages: {
    pagesFullWidth: 'pagesFullWidth',
    active: 'active'
  }
};

export const settings = {
  db: {
    url:
      '//' +
      window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : '')
  }
};

export const templates = {
  header: Handlebars.compile(
    document.querySelector(select.templateOf.header).innerHTML
  ),
  sidenav: Handlebars.compile(
    document.querySelector(select.templateOf.sidenav).innerHTML
  ),
  general: Handlebars.compile(
    document.querySelector(select.templateOf.general).innerHTML
  ),
  details: Handlebars.compile(
    document.querySelector(select.templateOf.details).innerHTML
  ),
  links: Handlebars.compile(
    document.querySelector(select.templateOf.links).innerHTML
  ),
  banners: Handlebars.compile(
    document.querySelector(select.templateOf.banners).innerHTML
  ),
  personalData: Handlebars.compile(
    document.querySelector(select.templateOf.personalData).innerHTML
  ),
  payout: Handlebars.compile(
    document.querySelector(select.templateOf.payout).innerHTML
  ),
  postback: Handlebars.compile(
    document.querySelector(select.templateOf.postback).innerHTML
  )
};
