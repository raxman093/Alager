
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




  const wrapper = document.querySelector('.news-wrapper');
  const nextButtonNews = document.querySelector('.slider-btn.next');
  const prevButtonNews = document.querySelector('.slider-btn.prev');
  
  let currentIndexNews = 0; // Текущий индекс первой видимой новости
  const newsItems = document.querySelectorAll('.news-item'); // Все новости
  const visibleItems = 4; // Количество видимых новостей
  const totalItems = newsItems.length; // Общее количество новостей
  
  // Устанавливаем ширину прокрутки
  const itemWidth = newsItems[0].getBoundingClientRect().width+5;
  
  // Обновляем состояние кнопок
  function updateButtons() {
    prevButtonNews.disabled = currentIndexNews === 0; // Отключаем кнопку "Назад", если это первый элемент
    nextButtonNews.disabled = currentIndexNews >= totalItems - visibleItems; // Отключаем кнопку "Вперед", если это последний элемент
  }
  
  // Прокрутка вперед
  nextButtonNews.addEventListener('click', () => {
    if (currentIndexNews < totalItems - visibleItems) {
      currentIndexNews++;
      wrapper.style.transform = `translateX(-${currentIndexNews * itemWidth}px)`;
      updateButtons();
    }
  });

  // Прокрутка назад
  prevButtonNews.addEventListener('click', () => {
    if (currentIndexNews > 0) {
      currentIndexNews--;
      wrapper.style.transform = `translateX(-${currentIndexNews * itemWidth}px)`;
      updateButtons();
    }
  });
  // Инициализация
  updateButtons();



  // Функция для определения текущей секции
function highlightMenu() {
  const sections = document.querySelectorAll("body>section");
  const menuItems = document.querySelectorAll(".side-menu li a");

  let currentSection = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
      currentSection = section.id; 
    }
  });

  menuItems.forEach((item) => {
    if (item.getAttribute("data-section") === currentSection) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
// Вызываем функцию при прокрутке страницы
window.addEventListener("scroll", highlightMenu);
// Инициализация на старте
highlightMenu();