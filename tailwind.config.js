/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*/*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'folder-bg': "url('/admin/imgs/folder.png')",
        'upload-bg': "url('/admin/imgs/uploadbg.svg')",
      },
      colors: {
        text_primary: "#696D70",
        primary: "#004181",
        // primarylight: "#004181",
        //  secondarylight: "#004181",
        colorBlack: "#071625",
        button: "#F16021",
        home_bg: "#131212",
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        secondary: '#F16021',
        text: '#696D70',
        title: '#7B8EA9',
        background: '#131212',

      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
