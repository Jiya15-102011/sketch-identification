function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
     canvas.mouseReleased(x);
     a=window.speechSynthesis;
}
function preload(){
y=ml5.imageClassifier('DoodleNet');
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}
function x(){
     y.classify(canvas,answer);
}
function answer(error,result){
if(error){
console.log(error);
}
else{
    console.log(result);
    document.getElementById("c").innerHTML="label :"+result[0].label;
    document.getElementById("d").innerHTML="confidence :"+Math.round(result[0].confidence*100)+"%";
    j=new SpeechSynthesisUtterance(result[0].label);
    a.speak(j);
}
}
function e(){
    background("white");
}