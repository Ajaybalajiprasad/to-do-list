const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list");
function Addtask(){
    if(inputBox.value === ''){
        alert("Type something before adding!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

inputBox,addEventListener('keyup',function(e){
    if( e.key === 'Enter'){
        Addtask();
    }
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=== "SPAN" ){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
