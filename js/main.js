document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
});

particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// 	anchor.addEventListener('click', function (e) {
// 		var e = document.getElementsByClassName("addAnimation");
// 		Array.prototype.forEach.call(e, e => {
// 			e.classList.add("animated");
// 			e.classList.add("slideInUp");
// 		});
// 	});
// });


// function mas(e) {
// 	var e = document.getElementsByClassName("addAnimation");
// 	Array.prototype.forEach.call(e, e => {
// 		e.classList.remove("animated");
// 		e.classList.remove("slideInUp");
// 	});

// 	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// 		setTimeout(mas, 3000);
// 		anchor.addEventListener('click', mas);

// 	}
// 	)};