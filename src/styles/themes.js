import variables from './/variables';

export default {
  light: {
    label: 'light',
    btnText: 'Dark mode',
    light: variables.colors.lightGray,
    dark: variables.colors.white,
    bodyBg: variables.colors.lightGray,
    headerBg: variables.colors.white,
    cardBg: variables.colors.white,
    color: variables.colors.veryDarkBlue,
  },
  dark: {
    label: 'dark',
    btnText: 'Light mode',
    light: variables.colors.blue,
    dark: variables.colors.darkBlue,
    bodyBg: variables.colors.darkBlue,
    headerBg: variables.colors.blue,
    cardBg: variables.colors.blue,
    color: variables.colors.white,
  },
};
