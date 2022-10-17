
// FOR CALLING YEAR IN FOOTER

var d = new Date();
document.getElementById('date').innerHTML = d.getFullYear();



// VISIBLE AND INVISIBLE MENU

var nav = document.getElementById('navigation'),
		target = document.getElementById('navigation-menu');

nav.addEventListener('click', function(){
	target.classList.toggle('open');
});



// BACK TO TOP SCROLL BUTTON

window.onscroll = function() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
		document.getElementById('top').style.display = "block";
	}else{
		document.getElementById('top').style.display = "none";
	}
};