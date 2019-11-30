/* global Handlebars */
export const select = {
  containerOf: {
    header: '#header',
    sidenav: '#sidenav',
    general: '#general',
    pages: '#pages .container',
    mainPage: '#pages',
    links: '#links'
  },
  templateOf: {
    header: '#template-header',
    sidenav: '#template-sidenav',
    general: '#template-general',
    links: '#template-links'
  },

  dropdown: {
    dropdown: '.dropdown',
    dropdownMenu: '.dropdown-menu',
    quitButton: '#quitBtn',
    quitPop: '#exit.overlay '
  },

  sidenav: {
    hamburger: '.hamburger',
    links: '.sidenav-item'
  },

  links: {
    link: '.linksLink',
    editLink: '.edit-link',
    deleteLink: '.delete-link'
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
  links: Handlebars.compile(
    document.querySelector(select.templateOf.links).innerHTML
  )
};
