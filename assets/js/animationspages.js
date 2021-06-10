const f1 = document.getElementById("f1");
const f2 = document.getElementById("f2");

window.onscroll = function() {myFunction()};
function myFunction() {
	if (document.body.scrollTop != 50 || document.documentElement.scrollTop != 50) {
		f1.classList.add('animate__animated', 'animate__backInUp');
	}

	if (document.body.scrollTop != 50 || document.documentElement.scrollTop != 50) {
		f2.classList.add('animate__animated', 'animate__backInRight');
	}

}

