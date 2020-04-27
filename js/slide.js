var slideIndex = 1;

showDivs(slideIndex);

var total = document.getElementById('s_total');
total.textContent = document.getElementsByClassName("slide").length;

function plusDivs(n) {
    showDivs(slideIndex += n);
    document.getElementById("s_index").textContent=slideIndex;
    
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}