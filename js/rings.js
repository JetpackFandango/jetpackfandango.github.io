let capture;

function setup() {
    createCanvas(windowWidth, windowHeight);
      let constraints = {
        video: {
        facingMode: { exact: "environment" }
    }};
    capture = createCapture(constraints);
    capture.size(windowWidth, windowHeight);
}

function draw() {
    image(capture, 0, 0);
    loadPixels();
    for (let i = 0; i < pixels.length; i += 4) {
        let r = pixels[i];
        let g = pixels[i+1];
        let b = pixels[i+2];
        // green
        if (r < 150 && b < 125 && g > 100) {
          pixels[i] = 0;
          pixels[i+1] = 255;
          pixels[i+2] = 0;
        } // blue
            else if (r > 100 && b > 100 && g < 200) {
          pixels[i] = 255;
          pixels[i+1] = 0;
          pixels[i+2] = 255;
        } 
        else if (r < 150 && b > 125 && g < 200) {
          pixels[i] = 0;
          pixels[i+1] = 0;
          pixels[i+2] = 255;
        } // red

// red
        else if (r > 125 && b < 125 && g < 125) {
          pixels[i] = 255;
          pixels[i+1] = 0;
          pixels[i+2] = 0;
          //green
        } else if (r > 125 && b < 125 && g > 125) {
          pixels[i] = 255;
          pixels[i+1] = 255;
          pixels[i+2] = 0;      
        } else {
          pixels[i] = 0;
          pixels[i+1] = 0;
          pixels[i+2] = 0;
        }
    }
    updatePixels();
}