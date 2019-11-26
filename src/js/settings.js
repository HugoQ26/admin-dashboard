export const select = {
  dropdown: {
    dropdown: '.dropdown',
    dropdownMenu: '.dropdown-menu',
    quitButton: '#quitBtn',
    quitPop: '#exit.overlay '
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
