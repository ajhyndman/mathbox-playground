import { mathBox } from 'mathbox';


// Bootstrap the mathBox instance.
const mathBoxIntro = mathBox({
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
    height: 500,
  },
});

// Set up a camera.
mathBoxIntro.camera({
  proxy: true,
  position: [0, 0, 2],
});

// Map a cartesian space onto the visible canvas.
const view = mathBoxIntro
  .cartesian({
    range: [[-4, 4], [-2, 2]],
    scale: [2, 1],
  });

view
  .axis({
    axis: 1,
    width: 3,
  })
  .axis({
    axis: 2,
    width: 3,
  })
  .grid({
    width: 1,
    divideX: 41,
    divideY: 21,
  });

// Tweak some view settings.
mathBoxIntro.select('axis').set('color', 'dark grey');
mathBoxIntro.select('grid').set('color', 'light grey');
mathBoxIntro.set('focus', 2);

// Build some data.
view.interval({
  expr(emit, x, i, t) {
    emit(x, Math.sin(x));
  },
  width: 41,
  channels: 2,
});

// Draw the data!
view.line({
  width: 3,
  color: '#3090FF',
});
view.point({
  size: 6,
  color: '#3090FF',
});

// Draw a second set of data.
view.interval({
  expr(emit, x, i, t) {
    emit(x, 0);
    emit(x, 1 / Math.sin(x));
  },
  width: 41,
  channels: 2,
  items: 2,
})
.vector({
  end: true,
  width: 3,
  color: '#50A000',
});

// Assemble axis ticks and labels.
view.scale({
  divide: 10,
})
.ticks({
  width: 2,
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

view.scale({
  axis: 2,
  divide: 5,
})
.ticks({
  width: 2,
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


// // Animate the entire scene.
// const play = mathBoxIntro.play({
//   target: 'cartesian',
//   pace: 5,
//   to: 2,
//   loop: true,
//   script: [
//     { props: { range: [[-2, 2], [-1, 1]] } },
//     { props: { range: [[-4, 4], [-2, 2]] } },
//     { props: { range: [[-2, 2], [-1, 1]] } },
//   ],
// });