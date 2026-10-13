/*
  Markup:
  <button class="popup-open" data-popup="popup-name">
    open popup
  </button>

  <div class="popup popup-name">
    <div class="popup__body">
      <button class="popup-close" type="button">
        Закрыть
      </button>

      <h2>title</h2>
      <p>content</p>
    </div>
  </div>
*/

const myPopup = function () {
  const openBtns = document.querySelectorAll('.popup-open');
  const wrappers = document.querySelectorAll('.popup');
  let popupData;

  if (openBtns.length > 0) {
    openBtns.forEach(open => {
      open.addEventListener('click', function () {
        popupData = this.getAttribute('data-popup');
        function selectPopup(popupData) {
          wrappers.forEach(wrap => {
            if (wrap.classList.contains(popupData)) {
              wrap.classList.add('_active');
              document.body.classList.add('_lock-scroll');
            }
          });
        }
        selectPopup(popupData);
      });
    });

    function closePopup() {
      const closeBtns = document.querySelectorAll('.popup-close');
      const wrapper = document.querySelectorAll('.popup');

      closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
          wrapper.forEach(wrap => {
            if (wrap.contains(closeBtn)) {
              wrap.classList.remove('_active');
            }
            if (!closeBtn.hasAttribute('data-popup')) {
              document.body.classList.remove('_lock-scroll');
            }
          });
        });
      });

      wrapper.forEach(wrap => {
        wrap.addEventListener('click', e => {
          const elementTarget = e.target;

          if (!elementTarget.closest('.popup__body')) {
            wrap.classList.remove('_active');
            document.body.classList.remove('_lock-scroll');
          }
        });
      });
    }
    closePopup();
  }
};
myPopup();
