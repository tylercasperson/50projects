const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    removeToggle();
    toggle.parentNode.classList.toggle('active');
  });
});

const removeToggle = () => {
  toggles.forEach((toggle) => {
    toggle.parentNode.classList.remove('active');
  });
};
