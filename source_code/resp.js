console.log('it works')

$(document).ready(function(){
	$('.submit').click(function(event){
		console.log('clicked button')
	})
})
 

	function validate()
		{
			var text = document.getElementById("phone").value;
			var regx=/^[6][0-9]{9}$/;
			if(regx.test(text))
			{

			}
			else
			{
				event.preventDefault()
				alert("invalid phone no");
			}
			var email = document.getElementById("email").value;
			var regx=/^[a-zA-z0-9/.-]+@[a-z]+.[a-z]+$/;
			if(regx.test(email))
			{

			}
			else
			{
				event.preventDefault()
				alert("invalid Email id");
			}
		}



burger=document.querySelector('.burger')
navBar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')




burger.addEventListener('click', ()=>{
	rightNav.classList.toggle('v-class');
	navList.classList.toggle('v-class');
	navBar.classList.toggle('h-nav');
})