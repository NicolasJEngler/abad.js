document.onload = function() {
  var t = document.getElementsByTagName('*');
  for (var i = 0; i < t.length; i++) {
    t[i].style.backgroundColor = '#000';
    t[i].style.color = '#ccc';
  }
};
