function submit() {
	var form = document.getElementById("form");
let mailto = 'mailto:'+form.elements[0].value+'?bcc='+form.elements[1].value+'&subject='+form.elements[2].value+'&body='+form.elements[3].value;
	window.open(mailto,'_blank','height='+screen.height+',width='+screen.width);
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
} 
			function submitForm(event){
        event.preventDefault();
        submit();
    }
