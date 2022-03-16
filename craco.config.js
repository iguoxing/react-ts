/*
 * @Author: ArdenZhao
 * @Date: 2022-03-16 11:31:05
 * @LastEditTime: 2022-03-16 11:31:18
 * @FilePath: /react-ts/craco.config.js
 * @Description: file information
 */
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
