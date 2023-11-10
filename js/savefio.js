window.addEventListener("DOMContentLoaded", loadMessage, false);
setInterval(showWarningIfOffline, 1000);
setInterval(saveMessage, 500);



function showWarningIfOffline(){
var warningdiv = document.getElementById("warning");
if (!navigator.onLine){
	warningdiv.innerHTML = "<p style=\"padding:3px;\">Сейчас вы находитесь в автономном режиме . Это сообщение сохраняется, и будет отправлена ​​на сервер в следующий раз вы находитесь в Интернете .</p>";
} else{
	warningdiv.innerHTML = "";
	
	}
}

function saveMessage(){
	var message = document.getElementById("name");
	localStorage.setItem("message", message.value)
}

function loadMessage(){
	var textbox = document.getElementById("name");
	var message = localStorage.getItem("message");
	 
	 if (!message) {
	 	textbox.value = "";
	 }else {
		textbox.value = message;
	}
}	

function submitForm(){
	if (!navigator.onLine){
		alert("Прямо сейчас Вы находитесь в автономном режиме. Ваше сообщение сохраняется локально . После того, как вы находитесь в Интернете , вы можете попробовать отправить форму");
		return false;
	} 
	
}