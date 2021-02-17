import { ISortable } from './interface'


export class CharacterGroup implements ISortable {
    data: string;
    get length(): number { return this.data.length }
    swap(leftPos: number, rightPos:number): void {  
        if (leftPos > this.data.length || rightPos > this.data.length) {console.error("INVALID PARAMETER"); return;} 
        let strArr = this.data.split('');   
        let tempStr = strArr[leftPos];
        strArr[leftPos] = strArr[rightPos];
        strArr[rightPos] = tempStr;
        this.data = strArr.join('')
    }
    compare(leftPos: number, rightPos:number): boolean {
        return this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase();
    }
    constructor(data: string) {
        this.data = data;
    }
}