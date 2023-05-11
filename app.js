let offset = 0; // смещение от левого края
const sliderLine = document.querySelector('.slider-line'),
			mobileSliderLine = document.querySelector('.mobile-slider__line'),
			firstDot = document.querySelector('.one-dot'),
			secondDot = document.querySelector('.two-dot'),
			thirdDot = document.querySelector('.three-dot'),
			firstWord = document.querySelector('.up-slider__one'),
			secondWord = document.querySelector('.up-slider__two'),
			thirdWord = document.querySelector('.up-slider__three'),
			mobileLeftArrow = document.querySelector('.mobile__left-arrow'),
			mobileRightArrow = document.querySelector('.mobile__right-arrow'),
			mobileArrowBlock = document.querySelector('.slider-arrow__block')


/* кнопки слайдера */

document.querySelector('.right__arrow').addEventListener('click', function(){
	offset = offset + 679;

	if(offset > 1358){
		offset = 0;
	}

	if(offset > 0){
		firstDot.classList.remove('active__dot');
		secondDot.classList.add('active__dot');
		firstWord.classList.remove('active__up-img');
		secondWord.classList.add('active__up-img');
	}

	if(offset > 679) {
		secondDot.classList.remove('active__dot');
		secondWord.classList.remove('active__up-img');
		thirdDot.classList.add('active__dot');
		thirdWord.classList.add('active__up-img');
	}

	if(offset < 679){
		firstDot.classList.add('active__dot');
		firstWord.classList.add('active__up-img');
		thirdDot.classList.remove('active__dot');
		thirdWord.classList.remove('active__up-img');
	}

	sliderLine.style.left = -offset +'px';
});




document.querySelector('.left__arrow').addEventListener('click', function(){
	offset = offset - 679;

	if(offset < 0){
		offset = 1358;
	}

	if(offset > 0){
		firstDot.classList.remove('active__dot');
		firstWord.classList.remove('active__up-img');
		secondDot.classList.add('active__dot');
		secondWord.classList.add('active__up-img');
	}

	if(offset > 679) {
		secondDot.classList.remove('active__dot');
		secondWord.classList.remove('active__up-img');
		thirdDot.classList.add('active__dot');
		thirdWord.classList.add('active__up-img');
	}

	if(offset < 679){
		firstDot.classList.add('active__dot');
		firstWord.classList.add('active__up-img');
		thirdDot.classList.remove('active__dot');
		thirdWord.classList.remove('active__up-img');
		secondDot.classList.remove('active__dot');
		secondWord.classList.remove('active__up-img');
	}

	if(offset < 1358){
		thirdDot.classList.remove('active__dot');
		thirdWord.classList.remove('active__up-img');
	}

	sliderLine.style.left = -offset +'px';
});




mobileRightArrow.addEventListener('click', function(){
	offset = offset + 340;

	if(offset > 1020){
		offset = 0;
	}

	mobileSliderLine.style.left = -offset + 'px';
});



mobileLeftArrow.addEventListener('click', function(){
	offset = offset - 340;

	if(offset < 0){
		offset = 680;
	}

	mobileSliderLine.style.left = -offset + 'px';

});


/* точки */

firstDot.addEventListener('click', function(){
	offset = 0;

	firstDot.classList.add('active__dot')
	firstWord.classList.add('active__up-img')
	if(offset = -679){
		secondDot.classList.remove('active__dot');
		secondWord.classList.remove('active__up-img');
		thirdDot.classList.remove('active__dot');
		thirdWord.classList.remove('active__up-img');
	};

	if(offset < 0) {
		offset = 0;
	};

	sliderLine.style.left = -offset +'px';
});


secondDot.addEventListener('click', function(){
	offset = 679;

	secondDot.classList.add('active__dot')
	secondWord.classList.add('active__up-img')
	if(offset = 679){
		firstDot.classList.remove('active__dot');
		firstWord.classList.remove('active__up-img');
		thirdDot.classList.remove('active__dot');
		thirdWord.classList.remove('active__up-img');
	};



	sliderLine.style.left = -offset +'px';
});


thirdDot.addEventListener('click', function(){
	offset = 1358;

	thirdDot.classList.add('active__dot');
	thirdWord.classList.add('active__up-img');
	if(offset = 1358){
		secondDot.classList.remove('active__dot');
		secondWord.classList.remove('active__up-img');
		firstDot.classList.remove('active__dot');
		firstWord.classList.remove('active__up-img');
	};

	sliderLine.style.left = -offset +'px';
});



/* слова над слайдером */

firstWord.addEventListener('click', function(){
	offset = 0;

	firstWord.classList.add('active__up-img');
	firstDot.classList.add('active__dot');

	if(offset = -679){
		secondWord.classList.remove('active__up-img');
		secondDot.classList.remove('active__dot');
		thirdWord.classList.remove('active__up-img');
		thirdDot.classList.remove('active__dot');
	};
	 
	if(offset < 0) {
		offset = 0;
	};

	sliderLine.style.left = -offset +'px';
});


secondWord.addEventListener('click', function(){
	offset = 679;

	secondWord.classList.add('active__up-img');
	secondDot.classList.add('active__dot');

	if(offset = 679){
		firstWord.classList.remove('active__up-img');
		firstDot.classList.remove('active__dot');
		thirdWord.classList.remove('active__up-img');
		thirdDot.classList.remove('active__dot');
	};

	sliderLine.style.left = -offset +'px';
});


thirdWord.addEventListener('click', function(){
	offset = 1358;

	thirdWord.classList.add("active__up-img")
	thirdDot.classList.add("active__dot")

	if(offset = 1358){
		firstWord.classList.remove('active__up-img');
		firstDot.classList.remove('active__dot');
		secondWord.classList.remove('active__up-img');
		secondDot.classList.remove('active__dot');
	};

	sliderLine.style.left = -offset +'px';
});
