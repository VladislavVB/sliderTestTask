
let droweCards = (slidesToShow) => {

	let position = 0;
	const slidesToScroll = 1; 

	//Обявление констант которые берут данны из Dom элементов
	const container = document.querySelector('.slider-container');
	const track = document.querySelector('#slide');
	const btnPrev = document.querySelector('.btn-prev');
	const btnNext = document.querySelector('.btn-next');
	const items = document.querySelectorAll('.slider-item');
	const itemsCount = items.length;
	const itemWidth = container.clientWidth / slidesToShow;
	const movePosition = slidesToScroll * itemWidth;

	//Задаем минимальную ширину для всех item
	items.forEach((item) => {
		item.style.minWidth = `${itemWidth}px`;
	});

	//обрабатываем событие click
	btnNext.addEventListener('click', () => {

		const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
		position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	});

	//обрабатываем событие click
	btnPrev.addEventListener('click', () => {
		
		const itemsLeft = Math.abs(position) / itemWidth;
		position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	});

	setInterval(() => {
		const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
		position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	}, 4000);

	//перемещение элемента с помощью translateX
	const setPosition = () => {
		track.style.transform = `translateX(${position}px)`;
	};

	//проверяем есть ли прокрутка слайда дальше  
	const checkBtns = () => {
		btnPrev.disabed = position === 0 ;
		btnNext.disabed = position <= -(itemsCount - slidesToShow) * itemWidth;
	};

	checkBtns();
}
//адаптив
window.addEventListener("resize", function(event) {
	checkWidht()
}) 

let checkWidht = () => {
	if (window.innerWidth > 1340) {
		droweCards(4)
	} 
	 if (window.innerWidth < 1340) {
		droweCards(3)
	} 
	 if (window.innerWidth < 1050) {
		droweCards(2)
	} 
	 if (window.innerWidth < 750) {
		droweCards(1)
	}
}

checkWidht()