#Project Summary

Munder Difflin is a fictional paper company that I created a website for. To make the website appealing to users I decided to use a color pallete based on the main background image displaying sheets of colored paper. In this way I color coordinated the background colors, link-hover colors and button colors to closely match the main background image colors. The design of the website is minimalistic in color-theme, layout and overall content. All of the writing on the page is in lower-case to go along with the mininalistic theme. These design choices are pleasing to the eye, and they draw the eye of the user to each element on the page. 


#Javascript Code

##This code made a vertical nav bar appear on the page once the user scrolled down 900 pixels.



window.addEventListener("scroll", (event) => {
	let showNav = document.querySelectorAll(".vertical-nav")
	let scrollToShow = showNav[0]

	if(window.scrollY > 900){
		scrollToShow.classList.add("show")
	} else { 
		scrollToShow.classList.remove("show")

	}

}); 



