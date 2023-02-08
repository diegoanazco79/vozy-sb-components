import '@coreui/coreui/dist/css/coreui.min.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    darkClass: 'c-dark-theme',
    stylePreview: true
  }
};