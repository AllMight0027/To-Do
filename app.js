var ul = document.getElementById('list');
var li;

const add = () =>{
    var text = document.getElementById('task').value
    text=text.trim()
    if(text===''){
        alert('Please enter a task')
    }
    else{
        document.getElementById('remove').style.display=null
        var li = document.createElement('li')
        var textnode = document.createTextNode(text)
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        var label = document.createElement('label')
        label.style.color='white'
        li.appendChild(checkbox)
        li.innerHTML += '&nbsp;&nbsp;&nbsp;';
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        document.getElementById('task').value=''
    }
}

document.getElementById('task').addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("add").click();
    }
  });

const remove = () =>{
    li=ul.children
    for (let i = 0; i < li.length; i++) {
        while(li[i] && li[i].children[0].checked){
            ul.removeChild(li[i])
        }
    }
    if(li.length===0){
        document.getElementById('remove').style.display='none'
    }
}