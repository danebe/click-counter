updateCount = document.getElementById("count")



let val = 0
function Click() {
     val+=1
     updateCount.textContent = val

    
}

function Reset() {

    updateCount.textContent = 0
    val=0

}

