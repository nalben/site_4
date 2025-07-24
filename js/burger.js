document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-burger-btn');
  const nav = document.querySelector('.menu-burger-nav');
  const closeBtn = nav.querySelector('a img');
  const links = nav.querySelectorAll('a:not(:has(img))'); // исключаем иконку-крестик

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.add('active');
    document.body.classList.add('lock');
  });

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
    document.body.classList.remove('lock');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      document.body.classList.remove('lock');
    });
  });
});
