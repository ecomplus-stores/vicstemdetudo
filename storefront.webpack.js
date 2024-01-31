const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './js/LoginBlock.js': path.resolve(__dirname, 'template/js/custom-js/js/LoginBlock.js'),
      './html/LoginModal.html': path.resolve(__dirname, 'template/js/custom-js/html/LoginModal.html'),
      './html/TheAccount.html': path.resolve(__dirname, 'template/js/custom-js/html/TheAccount.html'),
      './js/TheAccount.js': path.resolve(__dirname, 'template/js/custom-js/js/TheAccount.js'),
      './html/LoginModal.html': path.resolve(__dirname, 'template/js/custom-js/html/LoginModal.html')
    }
  }
})