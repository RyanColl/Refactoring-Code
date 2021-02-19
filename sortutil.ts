import { LinkedListGroup } from './linkedlistgroup'
import { NumberGroup } from "./numbergroup"
import { CharacterGroup } from './charactergroup'

export class SortUtil {
  collection: NumberGroup | CharacterGroup | LinkedListGroup;

  constructor(collection: NumberGroup | CharacterGroup | LinkedListGroup) {
    this.collection = collection;

  }

  sort(): void {
    const { length } = this.collection;
    let isSorted = false;
    let lastUnsorted = length - 1;
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < lastUnsorted; i++) {
        for (let y = 0; y < (length - 1); y++) {
          if (this.collection.compare(y, (y + 1)) == true) {
            this.collection.swap(y, y + 1);
          }
        }
      lastUnsorted--;
    }
  }
}
}

