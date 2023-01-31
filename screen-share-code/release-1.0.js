  let mousePositionExistingCanvas= undefined
  let ExistingCanvas = document.getElementById('canvasPS')
  let ExistingContext = ExistingCanvas.getContext("2d");

  ExistingCanvas.addEventListener('mousemove', function(evt) {
    mousePositionExistingCanvas = getMousePos(ExistingCanvas, evt);
    }, false);

  function getMousePos(canvasMousePos, evt) {
    var rect = canvasMousePos.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  setInterval(postMessage, 20);

  function postMessage() {
    parent.postMessage(JSON.stringify({practicespace:true,image:getCanvasImage()}), '*')
  }

  function getCanvasImage() {
    const quality = 0.85;
      if (ExistingCanvas) {
        const newCanvas = document.createElement('canvas');
        const newContext = newCanvas.getContext('2d');

        newCanvas.width = ExistingCanvas.width
        newCanvas.height = ExistingCanvas.height

        newContext.drawImage(ExistingCanvas,0,0)

        if (mousePositionExistingCanvas){
          newContext.beginPath();
          newContext.arc(mousePositionExistingCanvas.x, mousePositionExistingCanvas.y, 4, 0, 2 * Math.PI, false);
          newContext.fillStyle = 'red';
          newContext.fill();
        }

        const result = newCanvas.toDataURL('image/png', quality);
        return result;
      }
    return '';
  }
