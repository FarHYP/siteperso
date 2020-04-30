var anchorId = "projet_1";

function scrollToAnchor(anchorId){
    $("html, body").animate({
        scrollTop: $(anchorId).offset().top-80 }, {duration: 500,easing: "swing"});
    return false;
}
 
