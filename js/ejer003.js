
var evalu = document.getElementById("resultado");
var eda;
var  salar;



function evaluar(){
    salar = parseInt(document.getElementById("salario").value);
    eda= parseInt(document.getElementById("edad").value);
    evalu.value= salario();


}
function salario(){
    var bono=0;
    var total=0;
    
    if (eda>=60) {
        bono= (15/100) * salar;
        total= bono+salar; 
     return total;
    }else if(eda>=51){
        bono= (10/100) * salar;
        total= bono+salar;
        return total;
    }else if(eda>=19){
        bono= (5/100) * salar;
        total= bono+salar;
        return total;
    }else if(eda<=16){
        return "no trajaba";
    }

}