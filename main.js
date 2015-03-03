var links = document.querySelectorAll('.ref a');

for (var i = 0; i < links.length; i++) {
  links[i].setAttribute('target', '_blank');
}