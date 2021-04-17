const ul = document.querySelector('ul');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 200) {
    ul.classList.add('fixed');
  } else {
    ul.classList.remove('fixed');
  }
});

// ul.classList.add('fixed');
