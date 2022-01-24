    var radio1 = document.getElementsByClassName("form-check-input1");
    var radio2 = document.getElementsByClassName("form-check-input2");
    var label1 = document.getElementById("radio-label-1");
    var label2 = document.getElementById("radio-label-2");
    var i;
    var j;
    for(i=0; i < radio1.length; i++){
        radio1[i].addEventListener("click", function() {
            if(this.checked == true){
                label1.style.backgroundColor = "#ddefff";
                label2.style.backgroundColor = "";
            }
        })
    }
    for(j=0; j < radio2.length; j++){
        radio2[j].addEventListener("click", function() {
            if(this.checked == true){
                label2.style.backgroundColor = "#ddefff";
                label1.style.backgroundColor = "";
            }
        })
    }