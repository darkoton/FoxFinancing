/*
Markup:
  <div data-select data-value="0">
    <button data-select-header>
      <span data-select-value data-select-placeholder="Placeholder"></span>
    </button>
    <ul data-select-list>
      <li value="1" data-select-option>option 1</li>
      <li value="2" data-select-option>option 2</li>
      <li value="3" data-select-option>option 3</li>
    </ul>
  </div>
*/

const selects = document.querySelectorAll('[data-select]');

selects.forEach(select => {
  const header = select.querySelector('[data-select-header]');
  const list = select.querySelector('[data-select-list]');
  const valueEl = select.querySelector('[data-select-value]');

  if (!header) {
    console.error('Header not found in select', select);
  }

  if (!valueEl) {
    console.error('Value element not found in header', select);
  }

  if (!list) {
    console.error('List not found in select', select);
  }

  const options = Array.from(
    list.querySelectorAll('[data-select-option]'),
  );

  select.close = () => toggleSelect(false);

  header.styles({
    cursor: 'pointer',
    textAlign: 'left',
  });

  select.style.position = 'relative';
  list.styles({
    position: 'absolute',
    top: 'calc(100% + 5px)',
    left: '0',
    transition: 'opacity 0.3s ease 0s',
    opacity: '0',
    zIndex: '5',
    pointerEvents: 'none',
    width: '100%',
    maxHeight: '350px',
    overflow: 'auto',
  });

  updateValue(select.dataset.value);
  header.addEventListener('click', () => toggleSelect());
  options.forEach(option => {
    option.styles({
      cursor: 'pointer',
    });

    option.addEventListener('click', () => {
      const selectedValue = option.getAttribute('value');

      select.dataset.value = selectedValue;
      updateValue(selectedValue);
      toggleSelect(false);
    });
  });

  function toggleSelect(open = null) {
    const isOpen = open ?? select.dataset.open !== 'true';

    select.dataset.open = String(isOpen);
    select.classList.toggle('_active', isOpen);

    list.styles({
      opacity: isOpen ? '1' : '0',
      pointerEvents: isOpen ? 'auto' : 'none',
    });
  }

  function getOption(value) {
    return options.find(option => option.getAttribute('value') === value);
  }

  function updateValue(value) {
    const option = getOption(value);
    const isSelected = Boolean(option);

    valueEl.textContent = isSelected
      ? option.textContent
      : valueEl.dataset.selectPlaceholder;
    valueEl.style.opacity = isSelected ? 1 : 0.6;
  }
});

window.addEventListener('click', e => {
  const target = e.target;

  selects.forEach(select => {
    if (!select.contains(target)) {
      select.close();
    }
  });
});
