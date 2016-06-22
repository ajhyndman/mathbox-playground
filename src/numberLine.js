import { mathBox } from 'mathbox';


// Bootstrap the mathBox instance.
const numberLine = mathBox({
  element: document.querySelector('#app'),
  init: true,
  plugins: [
    'core',
  ],
  renderer: {
    parameters: {
      alpha: true,
      antialias: true,
    },
  },
  size: {
    height: 400,
  },
});

// Set up a camera.
numberLine.camera({
  proxy: true,
  position: [0, 0, 1],
});

// Map a cartesian space onto the visible canvas.
const view = numberLine
  .cartesian({
    range: [[-10, 10]],
  });

view.axis({
  axis: 1,
  range: [-11, 11],
  width: 2,
});

view.scale({
  axis: 1,
  divide: 10,
})
.ticks({
  width: 1,
  size: 15,
  color: 'dark grey',
})
.format({
  digits: 2,
  weight: 'normal',
})
.label({
  color: 'black',
  zIndex: 1,
});

// Tweak some view settings.
numberLine.select('axis').set('color', 'dark grey');
numberLine.select('grid').set('color', 'light grey');
numberLine.set('focus', 1);

view.array({
  data: [-10, -2, 1, 3],
  channels: 1,
  items: 2,
})
.point({
  size: 9,
  color: '#3090FF',
})
.vector({
  end: false,
  width: 4,
  color: '#3090FF',
});
