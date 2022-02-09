canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
rover_w = 70;
rover_h = 100;

rover_x = 10;
rover_y = 10;

function add(){
    b_imgtag = new Image();
    b_imgtag.onload = uploadbackground;
    b_imgtag.src = "parkingLot.jpg";

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadrover
    rover_imgtag.src = "car2.png"
}
function uploadbackground(){
    ctx.drawImage(b_imgtag, 0, 0, canvas.width, canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_w, rover_h)
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keyPressed = e.keyCode;
    if(keyPressed == '38'){
        up()
        console.log("up")
    }
    if(keyPressed == '40'){
        down()
        console.log("down")
    }
    if(keyPressed == '39'){
        right()
        console.log("right")
    }
    if(keyPressed == '37'){
        left()
        console.log("left")
    }
}
function up(){
    if(rover_y > 0){
        rover_y = rover_y - 10
        console.log("x= " + rover_x + "y= " + rover_y)
        uploadbackground()
        uploadrover()
    }
}
function down(){
    if(rover_y < 501){
        rover_y = rover_y + 10
        console.log("x= " + rover_x + "y= " + rover_y)
        uploadbackground()
        uploadrover()
    }
}
function left(){
    if(rover_x > 0){
        rover_x = rover_x - 10
        console.log("x= " + rover_x + "y= " + rover_y)
        uploadbackground()
        uploadrover()
    }
}
function right(){
    if(rover_y < 701){
        rover_x = rover_x + 10
        console.log("x= " + rover_x + "y= " + rover_y)
        uploadbackground()
        uploadrover()
    }
}