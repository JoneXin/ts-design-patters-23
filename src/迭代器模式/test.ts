import { Iiterator } from './app';

const iter = new Iiterator([1, 2, 3, 4]);

while (iter.hasNext()) {
    const value = iter.next();
    console.log(value);
}
