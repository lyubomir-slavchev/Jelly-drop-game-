// Creating variables
var myX = 0, myY = 0,updates=0,tekushtaPlatforma,jivoti=5;
let tekushtJivot;
let plX=[],plY=[];

for(tekushtaPlatforma=0;tekushtaPlatforma<3;tekushtaPlatforma=tekushtaPlatforma+1){
    plX[tekushtaPlatforma]=randomInteger(800-100);
    plY[tekushtaPlatforma]=615+tekushtaPlatforma*200;
}


function update() {
    // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
    myY= myY + 2;
    plY[0]= plY[0] - 1;
    plY[1]= plY[1] - 1;
    plY[2]= plY[2] - 1;
    if(myY<0 || myY+80>600){
        myY=100;
        jivoti=jivoti-1;
    } 
    
    if(isKeyPressed[39]){
        myX+=3;
    }
    if(isKeyPressed[37]){
        myX-=3;
    }
    for(tekushtaPlatforma=0;tekushtaPlatforma<3;tekushtaPlatforma=tekushtaPlatforma+1){
        if(plY[tekushtaPlatforma] < -15){
            plY[tekushtaPlatforma] = 615;
            plX[tekushtaPlatforma] =randomInteger(800-100);
        }
    }

    for(tekushtaPlatforma=0;tekushtaPlatforma<3;tekushtaPlatforma=tekushtaPlatforma+1){
        if(areColliding(plX[tekushtaPlatforma],plY[tekushtaPlatforma],100,15,myX,myY,80,80)){
            myY=plY[tekushtaPlatforma]-80;
        }
    }
}
function draw() {
    // tuk naprogramirai kakvo da se risuva
    drawImage(backCake,0, 0, 800, 600);
    drawImage(jelly[4],myX,myY,80,80);
    
    for(tekushtaPlatforma=0;tekushtaPlatforma<3;tekushtaPlatforma=tekushtaPlatforma+1){
        drawImage(groundGrass,plX[tekushtaPlatforma],plY[tekushtaPlatforma],100,15);
    }
    for(tekushtJivot=0;tekushtJivot<jivoti;tekushtJivot=tekushtJivot+1){
        drawImage(heart,tekushtJivot*30,0,29,29);
    }
    if(jivoti<=0){
        drawImage(backCactus,0,0,800,600);
    }
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
