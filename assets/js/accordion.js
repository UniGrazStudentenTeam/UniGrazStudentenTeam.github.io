var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var isOpen = panel.style.maxHeight;
    
    // for(j = 0; j < acc.length; j++){
    //     var otherpanel = acc[j].nextElementSibling;
    //     if (otherpanel !== panel)
    //     {
    //         acc[j].classList.remove("active");
    //         otherpanel.style.maxHeight = null;
    //     }
    // }
    
    /* Toggle between hiding and showing the active panel */

    if (isOpen) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
} 
