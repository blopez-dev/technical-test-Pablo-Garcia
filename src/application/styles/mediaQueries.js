const size = {
  mobileM: '360px',
  mobileL: '410px',
  tabletH: '768px',
  tabletV: '1024px',
  laptop: '1280px',
  laptopL: '1440px'
};

export const device = {
  laptopL: `(min-width: ${size.laptopL})`,
  laptop: `(min-width: ${size.laptop})`,
  tabletH: `(min-width: ${size.tabletH})`,
  tabletV: `(min-width: ${size.tabletV})`,
  mobileL: `(min-width: ${size.mobileL})`
};
