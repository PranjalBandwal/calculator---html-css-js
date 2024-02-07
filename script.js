const buttons = document.querySelectorAll('.button')
const string = ""
string = document.querySelector('#string')
buttons.forEach(function(btn){
    btn.addEventListener('click', function(obj){
        string=obj.target.value
        
    })
})