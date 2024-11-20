
  const slides = document.querySelector('.slides');
  const slideCount = document.querySelectorAll('.slide').length;
  const prevButton = document.querySelector('.slider-prev');
  const nextButton = document.querySelector('.slider-next');
  const links = document.querySelectorAll('.slide-link');

  let currentIndex = 0;

  // Переход к нужному слайду
  function goToSlide(index) {
    currentIndex = (index + slideCount) % slideCount; // Циклическое переключение
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateActiveLink();
  }

  // Обновление активной ссылки
  function updateActiveLink() {
    links.forEach((link, idx) => {
      link.classList.toggle('active', idx === currentIndex);
    });
  }

  // Обработчики для кнопок
  prevButton.addEventListener('click', (e) => {
    e.preventDefault(); // Предотвращаем действие
    goToSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', (e) => {
    e.preventDefault(); // Предотвращаем действие
    goToSlide(currentIndex + 1);
  });

  // Обработчики для ссылок
  links.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Отключаем переход по якорю
      goToSlide(idx);
    });
  });

  // Установка начального активного состояния
  updateActiveLink();

