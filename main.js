noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;





function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#0cfae2');
    fill('#069696');
    stroke('#0d95de');
    square(noseX,noseY,difference);
    document.getElementById("square_side").innerHTML="width and height of the square will be="+difference+"px";
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
     if(results.length>0)
     {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        leftwristX=results[0].pose.leftwrist.x;
        rightwristX=results[0].pose.rightwrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristX="+leftwristX+"rightwristX="+rightwristX+"difference="+difference);
}

}
