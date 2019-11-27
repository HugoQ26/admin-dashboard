/* global Handlebars */
export const select = {
  containerOf: {
    header: '#header',
    sidenav: '#sidenav',
    general: '#general',
    pages: '#pages'
  },
  templateOf: {
    header: '#template-header',
    sidenav: '#template-sidenav',
    general: '#template-general'
  },

  dropdown: {
    dropdown: '.dropdown',
    dropdownMenu: '.dropdown-menu',
    quitButton: '#quitBtn',
    quitPop: '#exit.overlay '
  },

  sidenav: {
    hamburger: '.hamburger'
  }
};

export const classNames = {
  sidenav: {
    hideSidenav: 'hideSidenav'
  },
  pages: {
    pages: 'pagesFullWidth'
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
  )
};
