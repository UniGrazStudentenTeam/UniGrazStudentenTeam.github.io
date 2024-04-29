var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    for(j = 0; j < acc.length; j++){
        var otherpanel = acc[j].nextElementSibling;
        if (acc[j] !== this)
        {
            acc[j].classList.remove("active");
            if (otherpanel.style.maxHeight) 
            {
                otherpanel.style.maxHeight = 0;
            } 
        }
    }
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = 0;
    } else {
      panel.style.maxHeight = 500;
    }
  });
} 
