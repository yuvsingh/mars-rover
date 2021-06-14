var canvas=document.getElementById("MyCanvas");

ctx=canvas.getContext("2d");
mars_images=["nasa_image_1.jpg","nasa_image_2.jpeg","nasa_image_3.jpg","nasa_image_4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_height=90;
bg_image=mars_images[random_number];
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=bg_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=Uploadrover;
    rover_imgTag.src=rover_image;
}
function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function Uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="37")
    {
  Left();
  console.log("Left");
    }
    if (keyPressed=="38"){
        up();
        console.log("up");
    }
    if (keyPressed=="39")
    {
        Right();
        console.log("right");
    }
    if (keyPressed=="40"){
        down();
        console.log("down");
    }
}
function Left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        uploadBackground();
        Uploadrover();
    }
    
}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        uploadBackground();
        Uploadrover();
    }
}
function Right(){
    if (rover_x<=700){
        rover_x=rover_x+10;
        uploadBackground();
        Uploadrover();
    }
}
function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        uploadBackground();
        Uploadrover();
        
    }
}