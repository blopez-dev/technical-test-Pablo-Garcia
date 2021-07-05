const size = {
  laptopL: '1440px',
  laptop: '1280px',
  tabletV: '1024px',
  tabletH: '768px',
  mobileL: '480px'
};

export const device = {
  laptopL: `(max-width: ${size.laptopL})`,
  laptop: `(max-width: ${size.laptop})`,
  tabletH: `(max-width: ${size.tabletH})`,
  tabletV: `(max-width: ${size.tabletV})`,
  mobileL: `(max-width: ${size.mobileL})`
};
