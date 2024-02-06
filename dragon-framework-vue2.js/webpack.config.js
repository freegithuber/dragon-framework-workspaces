/**
 * 该文件仅用于 IDEA 识别路径，没有实际作用
 */

'use script';

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
};
