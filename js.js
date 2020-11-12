var arr = [];
var getElement = el => document.querySelector(el);
var idStudent = getElement("#idStudent")
var nameStudent = getElement("#nameStudent")
var nameClass = getElement("#nameClass")
var jsScore = getElement("#jsScore")
var phpScore = getElement("#phpScore")
var androidScore = getElement("#androidScore")
function add() {
    arr.push({
    id:idStudent.value,
    name:nameStudent.value,
    class:nameClass.value,
    score:{
        javascript:jsScore.value, 
        php:phpScore.value,
        android:androidScore.value
        }
    })
    render();
    clearInput()
}

 getElement("button").addEventListener("click",add);
 function render(){
     var str =""
     for (let index = 0; index < arr.length; index++) {
        
         str =`<div class="item itemStudent">
                    <span>${arr[index].id}</span>
                    <span>${arr[index].name}</span>
                    <span>${arr[index].class}</span>
                    <span>${arr[index].score.javascript}</span>
                    <span>${arr[index].score.php}</span>
                    <span>${arr[index].score.android}</span>
                    <span><button onclick="Edit(${index})">Sua</button><button onclick="Delete(${index})">Xoa</button></span>
                </div>`
     }
         
     getElement(".listStudent").innerHTML += str
 }
 function clearInput() {
    var arrInput = document.querySelectorAll("input")
    arrInput.forEach(element=>{
        element.value = ""
    })
 }
 function Delete(index) {
     arr.splice(index,1)
     console.log(arr);
 }