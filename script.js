const btnWrap = document.querySelectorAll('.btn-wrap');

document.addEventListener('click', function (event) {
	const target = event.target;

	btnWrap.forEach((btnWrap) => {
		const content = btnWrap.querySelector('.content');

		if (btnWrap.contains(target)) {
			btnWrap.classList.toggle('active');
			if (btnWrap.classList.contains('active')) {
				const contentWidth = content.offsetWidth + 61;
				btnWrap.style.width = contentWidth + 'px';
			} else {
				btnWrap.style.transition = 'width 0.5s ease';
				btnWrap.style.width = '41px';
			}
		} else {
			btnWrap.classList.remove('active');
			btnWrap.style.transition = 'width 0.5s ease';
			btnWrap.style.width = '41px';
		}
	});
});
