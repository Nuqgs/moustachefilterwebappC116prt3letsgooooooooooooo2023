let noseX = 0;
let noseY = 0;
let rightEarX = 30;
let rightEarY = 30;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/J4LscT5s/Mustache-PNG-removebg-preview.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
  if (results.length > 0) {
    noseX = results[0].pose.nose.x - 20;
    noseY = results[0].pose.nose.y;
    rightEarX = results[0].pose.rightEar.x; // "E" in "Ear" should be uppercase
    rightEarY = results[0].pose.rightEar.y; // "E" in "Ear" should be uppercase

    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
 
  image(clown_nose, noseX, noseY, 40, 40);
}

function take_snapshot() {
  save('myFilterImage.png');
}
