const {Canvas, Button, TextView, ActivityIndicator, contentView} = require('tabris');


let contentw = contentView.append(
  Button({
    centerX: true, top: 100,
    text: 'Show message',
    onSelect: () => $(TextView).only().text = 'Tabris.js rocks!!'
  }),
  TextView({
    centerX: true, top: 'prev() 50',
    font: '24px'
  })
);
new ActivityIndicator({
  centerX: true, top: 35, tintColor: "#0c2"}).appendTo(contentw);

let acti = new ActivityIndicator({
    centerX: true, top: 35, tintColor: "#022"});

let canvas = new Canvas({top: 250, layoutData: "stretch"}).onResize(({target: canvas, width, height}) => {const context = canvas.getContext('2d', width, height); context.moveTo(0,0)}).appendTo(contentw);

canvas.append(acti);
