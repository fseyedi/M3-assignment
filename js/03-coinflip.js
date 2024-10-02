let randomNum = Math.round(Math.random())
let choice = prompt("Select Head ot tail (H/T)")

//1 is head , 0 is tail

if (randomNum>0){
    if (choice =='H'){
        window.alert("The flip was heads and you chose heads...you win!")    
    }
    else if (choice =='T'){
        window.alert("The flip was heads and you chose tail...you lose!")    
    }
}else if (randomNum<1){
    if (choice =='H'){
        window.alert("The flip was tails and you chose heads...you lose!")    
    }
    else if (choice =='T'){
        window.alert("The flip was tails and you chose tail...you win!")    
    }
}