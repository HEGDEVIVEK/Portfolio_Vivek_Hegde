var icon = document.getElementById(`viv`)

icon.onclick=function(){

    document.body.classList.toggle(`dark-mode`);

    if(document.body.classList.contains(`dark-mode`))
        {
            icon.classList.remove('fas', 'fa-moon'); 
            icon.classList.add('far', 'fa-sun'); 
        }
    else
        {
            icon.classList.remove('far', 'fa-sun'); 
            icon.classList.add('fas', 'fa-moon'); 
            
        }
}