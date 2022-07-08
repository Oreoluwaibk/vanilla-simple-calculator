const numberBtnlength = document.querySelectorAll(".btn").length;
const visualCurrent = document.querySelector(".visual-current")
const visualPrevious = document.querySelector(".visual-previous")
const addOperator = document.querySelector(".add")
const substractOperator = document.querySelector(".substract")
const divideOperator = document.querySelector(".divide")
const multiplyOperator = document.querySelector(".multiply")
const allClear = document.querySelector(".allclear")
const clear = document.querySelector(".clear");
const equalTo = document.querySelector(".equal")
    
//adding operators===========================
for( var i = 0; i<numberBtnlength; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        this.innerHTML
        if(visualCurrent.innerHTML.includes(".") && this.innerHTML ===".")return
        visualCurrent.innerHTML = visualCurrent.innerHTML + this.innerHTML;     
    })
}

document.addEventListener("keypress", function (e) {
    var numb = e.key 
    console.log(numb)
    if (numb >= 0 && numb <10){
        if(visualCurrent.innerHTML.includes(".") && numb===".")return
        visualCurrent.innerHTML = visualCurrent.innerHTML + numb;  
    }
})


addOperator.addEventListener("click", function() {
   add();
});
substractOperator.addEventListener("click", function() {
    substract();
});
multiplyOperator.addEventListener("click", function() {
    multiply();
});
divideOperator.addEventListener("click", function() {
    divide();
});
allClear.addEventListener("click", totalclear)
clear.addEventListener("click", cleared)
equalTo.addEventListener("click", function (){
    compute();
})
//calculator function===================================
function totalclear (){
    visualCurrent.innerHTML = "";
    visualPrevious.innerHTML = "";    
}
function cleared (){
    visualCurrent.innerHTML = "";
}
function add (){
    if(visualPrevious.innerHTML === "NaN"){
        totalclear();
    }else if(visualPrevious.innerHTML === ""){
        visualPrevious.innerHTML = visualCurrent.innerHTML + "  +";
        visualCurrent.innerHTML = "";
    }else{
        var newValue = parseFloat(visualCurrent.innerHTML) + parseFloat(visualPrevious.innerHTML) 
        visualCurrent.innerHTML = newValue;
        visualPrevious.innerHTML = visualCurrent.innerHTML + "  +"
        visualCurrent.innerHTML = "";
    }
}
function substract(){
    if(visualPrevious.innerHTML === "NaN"){
        totalclear();
    }else if(visualPrevious.innerHTML === ""){
        visualPrevious.innerHTML = visualCurrent.innerHTML + "  -";
        visualCurrent.innerHTML = "";
    }else{
        var newValue = parseFloat(visualPrevious.innerHTML) - parseFloat(visualCurrent.innerHTML) 
        visualCurrent.innerHTML = newValue;
        visualPrevious.innerHTML = visualCurrent.innerHTML + "  -";
        visualCurrent.innerHTML = "";
    }
}
function multiply(){
    if(visualPrevious.innerHTML === "NaN"){
        totalclear();
    }else if(visualPrevious.innerHTML === ""){
        visualPrevious.innerHTML = visualCurrent.innerHTML + "  x"
        visualCurrent.innerHTML = "";
    }else{
        var newValue = parseFloat(visualPrevious.innerHTML) * parseFloat(visualCurrent.innerHTML) 
        visualCurrent.innerHTML = newValue;
        visualPrevious.innerHTML = visualCurrent.innerHTML + "  x"
        visualCurrent.innerHTML = "";
    }
}
function divide(){
    if(visualPrevious.innerHTML === "NaN"){
        totalclear();
    }else if(visualPrevious.innerHTML === ""){
        visualPrevious.innerHTML = visualCurrent.innerHTML + "  ÷"
        visualCurrent.innerHTML = "";
    }else{
        var newValue = parseFloat(visualPrevious.innerHTML) / parseFloat(visualCurrent.innerHTML) 
        visualCurrent.innerHTML = newValue;
        visualPrevious.innerHTML = visualCurrent.innerHTML + "  ÷"
        visualCurrent.innerHTML = "";
    }
}
function compute (){
    if(visualPrevious.innerHTML === "NaN"){
        totalclear();
    } else{
        if (visualPrevious.innerHTML.includes("+")){
            var newValue = parseFloat(visualCurrent.innerHTML) + parseFloat(visualPrevious.innerHTML) 
            visualCurrent.innerHTML = newValue;
            visualPrevious.innerHTML = visualCurrent.innerHTML
            visualCurrent.innerHTML = "";
        }else if(visualPrevious.innerHTML.includes("-")){
            var newValue = parseFloat(visualPrevious.innerHTML) - parseFloat(visualCurrent.innerHTML) 
            visualCurrent.innerHTML = newValue;
            visualPrevious.innerHTML = visualCurrent.innerHTML;
            visualCurrent.innerHTML = "";
        }else if(visualPrevious.innerHTML.includes("÷")){
            var newValue = parseFloat(visualPrevious.innerHTML) / parseFloat(visualCurrent.innerHTML) 
            visualCurrent.innerHTML = newValue;
            visualPrevious.innerHTML = visualCurrent.innerHTML
            visualCurrent.innerHTML = "";
        }else{
            var newValue = parseFloat(visualPrevious.innerHTML) * parseFloat(visualCurrent.innerHTML) 
            visualCurrent.innerHTML = newValue;
            visualPrevious.innerHTML = visualCurrent.innerHTML
            visualCurrent.innerHTML = "";
        }
    }    
}
