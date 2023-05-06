const add = document.querySelector('.add')
const taskes = document.querySelector('.taskes');

let taske  
let input = document.querySelector('input') ;

// mode creat tasks 

let mode  = "creat"


let taskesListe = [] ;
if(localStorage.StorageTask != null)
{
    taskesListe =  JSON.parse(localStorage.StorageTask)
}
else{
    taskesListe = []
}
creatTaske = () => {
    
    taske = input.value
    taskesListe.push(taske)
    localStorage.setItem("StorageTask" , JSON.stringify(taskesListe))
    displaye()
    clean()
}
displaye()

function displaye(){
    let list = ''
    for(i = 0 ; i < taskesListe.length ; i++){
        list += `        <div class="taske">
        <div class="done" id="a${i}"  ><span class="material-symbols-outlined"  onclick="taskDone(a${i} )">done</span></div>
        <h2>${taskesListe[i]} </h2>
        <div class="option">
            <span class="material-symbols-outlined edit" onclick="edit(${i} )">edit</span>
            <span class="material-symbols-outlined delete" onclick="Delete(${i} )">delete</span>
        </div>
        
    </div>`
    
    }
    taskes.innerHTML= list
    


}
// ===========delete

Delete =(e) =>{
    taskesListe.splice(e,1);
    localStorage.StorageTask= JSON.stringify(taskesListe);
    displaye()
}

// --------------------edit
let update = document.querySelector(".update")
edit = (r) =>{
    mode = "update"
    if(mode === "update"){
        add.style.display="none"
        update.style.display="block"
        input.value = taskesListe[r]
        update.onclick = function (){
            taskesListe[r] = input.value
            localStorage.StorageTask= JSON.stringify(taskesListe);
            displaye()
            mode = "creat"
            update.style.display="none"
            add.style.display="block"
            clean()
        }
        
    }
    
}

// --------------clean
clean =() =>{
    input.value =""

}


let color=0
taskDone = (e) =>{
    console.log(e)
    if(color==0){
        e.style.backgroundColor="rgb(5, 187, 29)"
        color=1
    }else {
        e.style.backgroundColor="rgba(150, 150, 150, 0.521)"
        color=0
    }
}

