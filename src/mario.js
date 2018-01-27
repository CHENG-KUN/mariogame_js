function Mario() {
    var x = 0;
    var y = 0;
    this.move=function(direct){
        switch (direct){
            case 0:
                // window.alert("move up");
                var mymario = document.getElementById('mymario');
                var top = mymario.style.top;
                top = parseInt(top.substr(0,top.length-2));
                if(top<=0){
                    window.alert("game over!");
                }
                x = top;
                mymario.style.top=top-50+"px";
                break;
            case 1:
                // window.alert("move right");
                var mymario = document.getElementById('mymario');
                var left = mymario.style.left;
                left = parseInt(left.substr(0,left.length-2));
                if(left>=650){
                    window.alert("game over!");
                }
                y = left;
                mymario.style.left=left+50+"px";
                break;
            case 2:
                // window.alert("move down");
                var mymario = document.getElementById('mymario');
                var top = mymario.style.top;
                top = parseInt(top.substr(0,top.length-2));
                if(top>=350){
                    window.alert("game over!");
                }
                x = top;
                mymario.style.top=top+50+"px";
                break;
            case 3:
                // window.alert("move left");
                var mymario = document.getElementById('mymario');
                var left = mymario.style.left;
                left = parseInt(left.substr(0,left.length-2));
                if(left<=0){
                    window.alert("game over!");
                }
                y = left;
                mymario.style.left=left-50+"px";
                break;
        }

        var mymario = document.getElementById("mymario");
        var mushroom = document.getElementById("mushroom");
        var top = mymario.style.top;
        var left = mymario.style.left;
        var top1 = mushroom.style.top;
        var left1 = mushroom.style.left;
        var left2 = parseInt(left1.substr(0,left1.length-2))+50+"px";
        // window.alert(left2)
        if(top==top1&&left==left2){
            window.alert("CATCH IT!");
        }
         // window.alert(top+" "+left);


    }
}

var mario = new Mario();

function marioMove(direct) {
    switch (direct){
        case 0:
            mario.move(direct);
            break;
        case 1:
            mario.move(direct);
            break;
        case 2:
            mario.move(direct);
            break;
        case 3:
            mario.move(direct);
            break;
        case 4:
            mario.move(direct);
            break;
        default:
            window.alert("WRONG MOVE");
    }
}