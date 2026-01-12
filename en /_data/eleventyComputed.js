module.exports = {
    permalink: data => {
      return "/en" + data.page.filePathStem.replace(/^\/en/, "") + "/";
    }
  };