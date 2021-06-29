//jshint esversion:8

const videoElement = document.getElementById('video');
const button = document.getElementById('button');
  

// Media Stream Prompt
async function startCapture() {

  try {
    const captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = captureStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch(err) {
    console.error("Error: " + err);
  }
  return captureStream;
}

button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true;
  // Start Pic in Pic
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});


// On Load
startCapture();

