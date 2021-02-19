import { LinkedListGroup } from './linkedlistgroup'
import { SortUtil } from './sortutil'

export interface ISortable {
    length: number;
    compare(leftPos: number, rightPos:number): boolean;
    swap(leftPos: number, rightPos:number): void;
}

export const linkedListGroup = new LinkedListGroup()
linkedListGroup.add(0); linkedListGroup.add(1);
linkedListGroup.add(-10); linkedListGroup.add(-67);

export const sorter1 = new SortUtil([15, 23, -15, 28, 159, -160, 0]);
export const sorter2 = new SortUtil("string-string-yellow");
export const sorter3 = new SortUtil(linkedListGroup);