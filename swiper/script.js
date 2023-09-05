// Инициализация Swiper с эффектом fade
var mySwiper = new Swiper('.swiper-container', {
	effect: 'fade', // Устанавливаем эффект fade
	loop: true, // Если нужна бесконечная прокрутка
	pagination: {
	  el: '.swiper-pagination', // Пагинация (если необходимо)
	},
	navigation: {
	  nextEl: '.swiper-button-next', // Навигация вперед (если необходимо)
	  prevEl: '.swiper-button-prev', // Навигация назад (если необходимо)
	},
  });
  