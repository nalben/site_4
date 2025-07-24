const tourBlocks = document.querySelectorAll('.header__tour-item-select');

tourBlocks.forEach(tourBlock => {
  const button = tourBlock.querySelector('button');
  const list = tourBlock.querySelector('ul');
  const items = list.querySelectorAll('li');
  const arrow = tourBlock.querySelector('img');
  const hiddenInput = tourBlock.querySelector('input[type="hidden"]');

  button.addEventListener('click', () => {
    const isOpen = list.style.display === 'flex';

    if (isOpen) {
      list.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
      tourBlock.classList.remove('btn-active');
    } else {
      list.style.display = 'flex';
      arrow.style.transform = 'rotate(180deg)';
      tourBlock.classList.add('btn-active');
    }
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      const value = item.getAttribute('data-value');
      const text = item.textContent;

      button.textContent = text;
      hiddenInput.value = value;

      list.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
      tourBlock.classList.remove('btn-active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!tourBlock.contains(e.target)) {
      list.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
      tourBlock.classList.remove('btn-active');
    }
  });
});
