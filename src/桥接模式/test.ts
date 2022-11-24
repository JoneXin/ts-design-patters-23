import { Color, Round, Square } from './app';

const colorAttr = new Color({ backgroundColor: 'blue', borderColor: 'white', shadowColor: 'grey' });

const round = new Round('round', colorAttr);
const square = new Square('square', colorAttr);

const roundInfo = round.getInfo();
const squareInfo = square.getInfo();

console.log(roundInfo, '\n', squareInfo);
