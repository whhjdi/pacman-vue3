module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/color.scss";`
      }
    }
  }
};
