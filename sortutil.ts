import { LinkedListGroup } from './linkedlistgroup'
import { NumberGroup } from "./numbergroup"
import { CharacterGroup } from './charactergroup'

export class SortUtil {
    collection: number[] | string | LinkedListGroup;
  
    constructor(collection: number[] | string | LinkedListGroup) {
      this.collection = collection;
    }
  
    sort(): void {
      const { length } = this.collection;
      let isSorted = false;
      let lastUnsorted = length - 1;
      while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < lastUnsorted; i++) {
          // HANDLE LINKED LIST LOGIC HERE 
          if (this.collection instanceof LinkedListGroup) {
                for (let y = 0; y < (length -1); y++) {
                    if (this.collection.compare(y, (y+1)) == true) {
                        this.collection.swap(y, y+1);
                    }
                }
                
          }
  
          // HANDLE LIST OF NUMBERS LOGIC HERE
          // I GOT IT TO WORK WITH ARRAY OF NUMBERS
          if (this.collection instanceof Array) {
            for (let y = 0; y < (length -1); y++) {
                const nG = new NumberGroup(this.collection)
                if (nG.compare(y, (y+1)) == true) {
                    nG.swap(y, y+1);
                }
            }
          }
  
          // HANDLE STRING LOGIC HERE
          if (typeof this.collection === "string") {
            for (let y = 0; y < (length -1); y++) {
                const cG = new CharacterGroup(this.collection)
                if (cG.compare(y, (y+1)) == true) {
                    cG.swap(y, y+1);
                }
            }
          }
        }
        lastUnsorted--;
      }
    }
  }
  
 
  