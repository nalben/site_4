document.addEventListener('DOMContentLoaded', () => {
  const calendarBlock = document.querySelector('.header__tour-item-calendar');
  const button = calendarBlock.querySelector('button');
  const input = calendarBlock.querySelector('#date');

  const calendar = flatpickr(input, {
    mode: 'range',
    dateFormat: 'd.m.Y',
    appendTo: calendarBlock,
    onOpen: () => {
      calendarBlock.classList.add('btn-active');
    },
    onClose: () => {
      calendarBlock.classList.remove('btn-active');
    },
    onChange: function (selectedDates) {
      if (selectedDates.length === 2) {
        const start = calendar.formatDate(selectedDates[0], 'd.m.Y');
        const end = calendar.formatDate(selectedDates[1], 'd.m.Y');
        const range = `${start} - ${end}`;
        button.textContent = range;
        input.value = range;
      } else {
        button.textContent = 'Дата похода';
        input.value = '';
      }
    }
  });

  button.addEventListener('click', (e) => {
    e.stopPropagation();
    calendar.open();
  });
});
