var icon = document.getElementById("myIcon"); 

icon.onclick = function() {
    document.body.classList.toggle("dark-mode"); 
    if (document.body.classList.contains("dark-mode")) {
        icon.innerHTML = `<i class="fa fa-sun"></i>`;
    } else {
        icon.innerHTML = `<i class="fa fa-moon"></i>`;
    }
}

