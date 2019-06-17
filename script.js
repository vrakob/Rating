const STARCONTAINER = document.querySelector(".rating-container > .star-rating");
const STAR = document.querySelectorAll(".star-rating > input");
const PAGE = document.body.parentNode;
//console.log(STAR);


PAGE.addEventListener("click", reset, false);

function reset(event) {
  //event.preventDefault();
  if (!STARCONTAINER.contains(event.target)) {
	  	STAR.forEach(function(elem) {
	        elem.checked = false;

		});
		// console.log ("Click at BODY");
  	// } else if (STAR[0].contains(event.target) ||
  	// 	STAR[1].contains(event.target) ||
  	// 	STAR[2].contains(event.target)||
  	// 	STAR[3].contains(event.target) ||
  	// 	STAR[4].contains(event.target))  {
  		
  	// }
}
}
