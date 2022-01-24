    var acc = document.getElementsByClassName("accordion-btn");
    var acc_panel = document.getElementsByClassName("acc-panel");
    var i,j;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            for (j = 0; j < acc_panel.length; j++) {
                acc_panel[j].style.display = "none";
            }
            var data = this.getAttribute("data-id");
            document.getElementById("acc-panel-img").src = data;
            /* Toggle between hiding and showing the active panel */
             var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }