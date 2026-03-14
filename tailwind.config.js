module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './packages/react/src/**/*.{js,ts,jsx,tsx}',
    // './packages/vue/src/**/*.{js,ts,vue}'
  ],
  theme: {
    extend: {
      // 在这里定义全局设计变量
      colors: {
        primary: '#3b82f6',
        secondary: '#10b981',
      }
    },
  },
  plugins: [],
}