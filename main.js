var sizeChecker = 0;
function textBigger(){
	sizeChecker++;
	let bodyThing = document.getElementById('bodyCss');
	if(sizeChecker % 2 != 0){
		bodyThing.style.fontSize = "25px";
	}
	else{
		bodyThing.style.fontSize = "16px";
	}
}

function checkboxDefault(){
	var checkBox = document.getElementById('flexCheckDefaultText');
	checkBox.checked = false;
}
