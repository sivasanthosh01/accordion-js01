var acc_name=document.querySelectorAll(".acc-name");
console.log(acc_name);

acc_name.forEach(function(q){
	q.addEventListener("click",function(){
		// q.nextElementSibling.classList.add("active");
		// console.log(q);
		if(q.nextElementSibling.classList.contains("active"))
		{
			q.nextElementSibling.classList.remove("active");
			q.querySelector("i").style.transform="rotate(180deg)";
		}
		else
		{
			q.nextElementSibling.classList.add("active");
			q.querySelector("i").style.transform="rotate(0deg)";
		}
		
		// console.log(q.secondElementChild);
		// console.log(angle);
		
		// if(q.firstChild.classList.contains("angle")){
			// q.firstChild.classList.remove("angle");
			
		// }
		// else{
			// q.firstChild.classList.add("angle");
		// }
		
		
		
			
	})
	

})


// var angle=document.querySelectorAll(".angle");
// console.log(angle);

// angle.forEach(function(r){
	// r.addEventListener("click",function(){
	// if(r.classList.contains("angle"))
		// {
			// r.classList.remove("angle");
		// }
		// else
		// {
			// r.classList.add("angle");
		// }
			
	// })
	
// })	