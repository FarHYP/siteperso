var sysNavLang = "";
var viewLang = document.getElementsByName("langue");

sysNavLang = (navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage).toLowerCase();

if ( sysNavLang.length >= 2 ) {
    var sys = sysNavLang.substr( 0, 2 );
    /* Set default language */
    for( var x = 0; x < viewLang.length; x++ ) {
        /* menuId.localeCompare(preMId) */
        if ( viewLang[x].value.localeCompare(sys) == 0 ) {
            viewLang[x].checked = true;
            /* alert("viewLang[" + x + "] = sysNavLang = " + viewLang[x].value); */
        } 
    }
}


var sysinfo = document.getElementById("sysinfo");
sysinfo.innerHTML = sysNavLang;

