import shape1 from '../assets/airplane.svg'
import shape2 from '../assets/bath-tub.svg'
import shape3 from '../assets/cocktail.svg'
import shape4 from '../assets/hotel.svg'
import shape5 from '../assets/surf.svg'

const shapes = [
    {
        shapeId:'1',
        uniqueId:'01',
        shape:shape1
    },
    {
        shapeId:'2',
        uniqueId:'02',
        shape:shape2
    },
    {
        shapeId:'3',
        uniqueId:'03',
        shape:shape3
    },
    {
        shapeId:'4',
        uniqueId:'04',
        shape:shape4
    },
    {
        shapeId:'5',
        uniqueId:'05',
        shape:shape5
    },
    {
        shapeId:'1',
        uniqueId:'06',
        shape:shape1
    },
    {
        shapeId:'2',
        uniqueId:'07',
        shape:shape2
    },
    {
        shapeId:'3',
        uniqueId:'08',
        shape:shape3
    },
    {
        shapeId:'4',
        uniqueId:'09',
        shape:shape4
    },
    {
        shapeId:'5',
        uniqueId:'10',
        shape:shape5
    }


]

function randomize(values) {
    let index = values.length,
      randomIndex;
  
    // While there remain elements to shuffle.
    while (index !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * index);
      index--;
  
      // And swap it with the current element.
      [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
    }
  
    return values;
  }
 
  const shapesRandom = randomize(shapes);
  export default shapesRandom;