// Changes the text color of the `<header>` element to red (#FF0000) using `document.querySelector`.

document.addEventListener('DOMContentLoaded', function() {
  const headerElement = document.querySelector('header');
  if (headerElement) {
    headerElement.style.color = '#FF0000';
  }
});