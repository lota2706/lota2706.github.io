var player_x=1;
var player_y=1;
var block_wall=[];
var step=150;
var p1=20;
var p2=40;
var p3=50;
var p4=67;
var p5=17;

var audio = new Audio('images/ting.mp3');


for (var i=0; i<=39; i++) {
block_wall[i]=[];
    for (var j=0; j<=39; j++) {
        block_wall[i][j]=0;
    }
}


function creat_wall(x,y) {
    block_wall[x][y]=1;
    document.getElementById("maze").innerHTML+='<div class="block" id="block_'+x+'_'+y+'"></div>';
    document.getElementById("block_"+x+"_"+y).style.top=y*2.5+"%";
    document.getElementById("block_"+x+"_"+y).style.left=x*2.5+"%";
}

for (var i=0; i<=39; i++) {
    creat_wall(0,i); creat_wall(i,0); creat_wall(39,i); creat_wall(i,39);
}


function moving(direction) {
    if (direction == "ArrowRight") {
        player_x+=1;
        step=step-1+block_wall[player_x][player_y];
        player_x-=block_wall[player_x][player_y];
        document.getElementById('player').style.left=player_x*2.5+"%";
    } else
    if (direction == "ArrowLeft") {
        player_x-=1;
        step=step-1+block_wall[player_x][player_y];
        player_x+=block_wall[player_x][player_y];
        document.getElementById('player').style.left=player_x*2.5+"%";
    } else
    if (direction == "ArrowDown") {
        player_y+=1;
        step=step-1+block_wall[player_x][player_y];
        player_y-=block_wall[player_x][player_y];
        document.getElementById('player').style.top=player_y*2.5+"%";
    } else
    if (direction == "ArrowUp") {
        player_y-=1;
        step=step-1+block_wall[player_x][player_y];
        player_y+=block_wall[player_x][player_y];
        document.getElementById('player').style.top=player_y*2.5+"%";
    }
    if (player_x==5 && player_y==1) {step+=p1; p1=0;
        document.getElementById('p1').innerHTML=p1; audio.play();
    }
    if (player_x==3 && player_y==35) {step+=p2; p2=0; 
        document.getElementById('p2').innerHTML=p2; audio.play();
    }
    if (player_x==19 && player_y==38) {step+=p3; p3=0;
        document.getElementById('p3').innerHTML=p3; audio.play();
    }
    if (player_x==31 && player_y==9) {step+=p4; p4=0;
        document.getElementById('p4').innerHTML=p4; audio.play();
    }
    if (player_x==38 && player_y==31) {step+=p5; p5=0;
        document.getElementById('p4').innerHTML=p5; audio.play();
    }
    if (player_x==38 && player_y==37) {
        alert("you win");
        document.getElementById('next').style.display="block";
    }
    if(step<0) {
        alert('YOU LOSE! GÀ')
    }
    document.getElementById('step_l').innerHTML='STEP LEFT:'+step;
    if(step%3==0) {
        block_wall[26][9]=0;
        document.getElementById('entrance').style.opacity="0";
    } else {
        block_wall[26][9]=1;
        document.getElementById('entrance').style.opacity="1";
    }   
}

function myFunction(event) {
    var x = event.key;
    if (x == "ArrowLeft" || x == "ArrowRight" || x == "ArrowUp" || x == "ArrowDown") { 
      moving(x);
    }
  }

  function instruc() {
    alert('Hoàn thành mê cung trong số bước cho phép để nhận thưởng, bước vào các ô màu xanh để nhận thêm bước di chuyển!')
  }
