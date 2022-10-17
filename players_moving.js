var player_x=1;
var player_y=1;
var block_wall=[];
var step=150;

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
    if (player_x==5 && player_y==1) {step+=20;
        document.getElementById('p1').innerHTML=0;
    }
    if (player_x==3 && player_y==35) {step+=40;
        document.getElementById('p2').innerHTML=0;
    }
    if (player_x==19 && player_y==38) {step+=50;
        document.getElementById('p3').innerHTML=0;
    }
    if (player_x==31 && player_y==9) {step+=70;
        document.getElementById('p4').innerHTML=0;
    }
    if (player_x==38 && player_y==31) {step+=17;
        document.getElementById('p4').innerHTML=0;
    }
    if (player_x==38 && player_y==37) {
        alert("you win");
        
    }
    if(step<0) {
        alert('you lose! NGU, GÀ')
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
