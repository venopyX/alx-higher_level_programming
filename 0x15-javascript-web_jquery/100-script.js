// Script that update header text color using `document.querySelector` (script in `<head>`).

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  if (header) {
    header.style.color = '#FF0000';
  }
});