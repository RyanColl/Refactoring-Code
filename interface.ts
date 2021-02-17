import { NumberGroup } from './numbergroup'
import { CharacterGroup } from './charactergroup'
import { LinkedListGroup } from './linkedlistgroup'
import { Node } from './node'


export interface ISortable {
    length: number;
    compare(leftPos: number, rightPos:number): boolean;
    swap(leftPos: number, rightPos:number): void;
}

const numberGroup = new NumberGroup([15, 23, -15, 28, 159, -160, 0])
const characterGroup = new CharacterGroup("string-string-yellow")
const linkedListGroup = new LinkedListGroup()
let node = new Node(6)
let i = 0;



linkedListGroup.add(0)
linkedListGroup.add(1)