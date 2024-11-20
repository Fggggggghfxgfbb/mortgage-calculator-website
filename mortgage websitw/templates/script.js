var fahr = 0
var cent = 0

function temperature(){
    if (document.getElementById("fahr").value == ""){
        if(document.getElementById("cent").value == ""){
            alert("you need a a value")

    
    
        }else{
            document.getElementById(fahr).value = String((Number(document.getElementById("cent").value - 32)/9*5))
        }

    }
    
    else{
        if(document.getElementById("cent").value != ""){
            
            alert("you cant have both value in")
    
    
        }else{
            document.getElementById(fahr).value = String((Number(document.getElementById("fahr").value *9/5)+32))
        }

    }
    


}
