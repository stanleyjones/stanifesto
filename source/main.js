Array.prototype.forEach.call(
  document.querySelectorAll("main > ul li"),
  function (el) {
    el.style.color = color(el.dataset.datetime);
  }
);

function color(datetime) {
  if (!datetime) {
    return;
  }

  var date = new Date(datetime);
  var ago = (new Date() - date) / (8.64e7 * 365); // in years
  var day = Math.ceil((date - new Date(date.getFullYear(), 0, 1)) / 8.64e7);

  var hue = Math.floor((360 * day) / 365);
  var sat = 100 * Math.max(0, 1 - ago / 15);
  return "hsl(" + hue + "," + sat + "%,50%)";
}
