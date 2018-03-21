window.addEventListener("scroll", (event) => {
	let showNav = document.querySelectorAll(".vertical-nav")
	let scrollToShow = showNav[0]

	if(window.scrollY > 1000){
		scrollToShow.classList.add("show")
	} else { 
		scrollToShow.classList.remove("show")

	}

} );