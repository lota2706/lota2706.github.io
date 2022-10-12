function fish_swim(id_fish) {
setInterval(function () 
{
    document.getElementById(id_fish).style.left="500px";
},
1000);

setInterval(function () 
{
    document.getElementById(id_fish).style.left="30px";
},
2000); }

function fish_swim2(id_fish) {
    setInterval(function () 
    {
        document.getElementById(id_fish).style.left="30px";
    },
    1000);
    
    setInterval(function () 
    {
        document.getElementById(id_fish).style.left="500px";
    },
    2000); }

    var a=0;

function catch_fish(ele) {
    a+=1;
    var idd=ele.id;
    document.getElementById(idd).style.opacity="0";
    document.getElementById("point_fish").innerHTML=a;
    if (a==10) {alert("you win");}
}

fish_swim("fish1");
fish_swim2("fish2");
fish_swim("fish3");
fish_swim2("fish4");
fish_swim("fish5");
fish_swim2("fish6");
fish_swim("fish7");
fish_swim2("fish8");
fish_swim("fish9");
fish_swim2("fish10");
