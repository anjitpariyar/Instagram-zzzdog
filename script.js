// Made with Zdog

window.addEventListener('DOMContentLoaded', (event) => {

  let isSpinning = true;
  let height = window.screen.availHeight
  let width = window.screen.availWidth
  let canvas = document.getElementById('canvas');
  let  TAU = Zdog.TAU;

  


  var ctx = canvas.getContext("2d");
  
// background:linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
var grd = ctx.createLinearGradient(0, 0,  0.5 * height, 0.5 * height);
grd.addColorStop(0, "#405de6");
grd.addColorStop(0.2, "#5851db");
grd.addColorStop(0.4, "#833ab4");
grd.addColorStop(0.6, "#c13584");
grd.addColorStop(0.8, "#e1306c");
grd.addColorStop(1, "#fd1d1d");


let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  dragRotateY: false,


  resize: {
    height: 800,
    width: 900,
  },

  // stop spinning when drag starts
  translate: {
    x: 0, 
    y: 0,
  },
  onDragStart: function() {
    isSpinning = false;
  },
  onDragEnd: function() {
    isSpinning = true;
  },
});

const head = new Zdog.Anchor({
  addTo: illo,
  
});

const domepiece = new Zdog.Group({
  addTo: head
});


// circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 0.3 * height,
  translate: { z: 200 },
  stroke: 50,
  color: '#fff',

});

new Zdog.Shape({
  addTo: illo,
  stroke: 80,
  color: '#fff',
  translate: { z: 100, x : - 0.2 * height , y :- 0.2 * height  },

});

// square
new Zdog.RoundedRect({
  addTo: illo,
  width: 0.5 * height,
  height: 0.5 * height,
  translate: { z: -40, x: 0, y:0},
  stroke: 100,
  color : grd,
  fill: true,
   depth: 80,
   cornerRadius: 30,
});

function animate() {
  illo.rotate.y += isSpinning ? 0.01 : 0;
  // if(isSpinning){
  // illo.rotate.x > 0 ? -- illo.rotate.x : 0 ;

  // }


  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();


});