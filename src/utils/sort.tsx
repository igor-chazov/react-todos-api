import { ITodo } from '../types/Todo';

export default function sort(obj: Array<ITodo>, key: string) {

  return obj
    .map((item, i) => ({ index: i, value: item['created'] }))
    .sort((a, b) => {
      if (a.value < b.value) return 1;
      if (a.value > b.value) return -1;
      return 0;
    })
    .map((el) => obj[el.index]);
}
