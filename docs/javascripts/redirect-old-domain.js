(function () {
  var oldHost = "jiyouhai.github.io";
  var newHost = "zhouyi-xiaoxiao.github.io";

  if (window.location.hostname !== oldHost) return;

  var newUrl =
    window.location.protocol +
    "//" +
    newHost +
    window.location.pathname +
    window.location.search +
    window.location.hash;

  window.location.replace(newUrl);
})();
