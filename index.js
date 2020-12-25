document.querySelector('#form').addEventListener('submit', function(e) {

    if(document.getElementById("todo").value === ""){
        alert("Please Enter Title")
    }else if(document.getElementById("date").value === ""){
        alert("Please Enter Due Date")
    }else{
        var n = document.getElementById("todo").value
        const list = {
            Todo: document.getElementById("todo").value, 
            DD: document.getElementById("date").value,
            status: "not done"
        }
        localStorage.setItem(n,JSON.stringify(list))
    }

})

for(i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i)
    var value = JSON.parse(localStorage.getItem(key))
    var table = document.getElementById('all-list')
    let row = table.insertRow(-1)
    let zeroCell = row.insertCell(0)
    let firstCell = row.insertCell(1)
    let secondCell = row.insertCell(2)
    let thirdCell = row.insertCell(3)

    var zero = document.createElement("BUTTON")
    zero.innerHTML = "X" 
    zero.id = key
    zero.addEventListener("click", function(){
        localStorage.removeItem(this.id)
        alert(this.id + " is DELETE!")
        location.reload()
    });
    zeroCell.appendChild(zero);

    firstCell.textContent = key

    secondCell.textContent =  value.DD

    var button = document.createElement("BUTTON")
    if (value.status == "not done"){
        button.innerHTML = "NOT DONE"   
        button.className = "red"
        button.id = key
        button.addEventListener("click", function(){  
            value.status = "done"
            localStorage.setItem(key,JSON.stringify(value))
            alert(this.id + " is DONE!")
            location.reload()
        });
    }else{
        button.innerHTML = "DONE"
        button.className = "green"
    }       
    thirdCell.appendChild(button);
}

