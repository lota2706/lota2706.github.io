function first_slide() {
    document.getElementById("first_slide").style.left="0";
}

function toGift() {
    document.getElementById("first_slide").style.left="120vw";
    setTimeout(function() { document.getElementById("first_slide").style.display="none"}, 1000);
}

function showgift2(y) {
    console.log('helo');
    document.getElementById("gift_img_"+y).style.opacity="0";
    document.getElementById("giftcard"+y).style.top="0";
    document.getElementById("giftcard"+y).style.opacity='0.6';
}
function showall(x) {
    for (var i=1; i<=4; i++) {
        if(i!=x) showgift2(i);
 }
}

function showgift(x) {
    console.log('helo');
    document.getElementById("gift_img_"+x).style.display="none";
    document.getElementById("giftcard"+x).style.top="0";
    document.getElementById("giftcard"+x).style.opacity='1';
    setTimeout(function() {showall(x); document.getElementById("a_end").style.display="block";},1000);
    
}

function slides() {
    document.getElementById("sl_1").style.left="0";
    setTimeout(function(){
        document.getElementById("sl_2").style.top="0";
    },6000)
    setTimeout(function(){
        document.getElementById("sl_3").style.opacity="1";
    },10000)
}


