var n;
var res= document.getElementById("resultado");

function calcular(){
    n = parseInt(document.getElementById("n").value);
    res.value = factorial();
}

function factorial () {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}