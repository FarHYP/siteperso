var langue = document.getElementsByName("langue");
var navZone = document.getElementById("nav_zone");
var burger = document.getElementById("burger");
var menuId;
var otherMenuId;
var preMId;

/* Get default language setting */
for( var i = 0; i < langue.length; i++ ) {
    langue[i].addEventListener('click', changeDisplayMenu); 

    if (langue[i].checked) {
        menuId = "menu_" + langue[i].value;
        preMId = menuId;    
    } 
    else {
        otherMenuId = "menu_" + langue[i].value;
        document.getElementById(otherMenuId).style.display = "none";
    }
}

/* display menu by language while menu zone is hovered and hide it while menu zone is not hovered */
navZone.onmouseover =  function() {
    document.getElementById(menuId).style.display = "block";
}; 
navZone.onmouseout =  function() {
    document.getElementById(menuId).style.display = "none";
};

/* display menu by language while burger is checked and hide it while burger is not checked */ 
burger.onclick =  function() {
    if (burger.checked == true){
        document.getElementById(menuId).style.display = "block";
    }
    else {
        document.getElementById(menuId).style.display = "none";
    }
}; 


/* change menu language */ 
function changeDisplayMenu() {
    var isSameM;
     
    menuId = "menu_" + this.value;
    isSameM = menuId.localeCompare(preMId);
  
    if (isSameM != 0) { 
        document.getElementById(menuId).style.display = "block";
        document.getElementById(preMId).style.display = "none"; 
    }
    else {
        ;
    }
    preMId = menuId;
}
