let resultText= document.getElementById("result")
let flag = false
function addToCalc(value){
    if(flag){
        resultText.value=''
        flag=false
    }
    resultText.value+=value
    
    

}
function finalResult(){
    
    let result=eval(resultText.value)
    resultText.value=result
    flag=true
}