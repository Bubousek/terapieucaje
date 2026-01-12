module.exports = {
    permalink: data => {
      return data.page.filePathStem.replace(/^\/cs/, "") + "/";
    }
  };