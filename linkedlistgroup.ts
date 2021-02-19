import { Node } from "./node"
import { ISortable } from './interface'

export class LinkedListGroup implements ISortable {
    head: Node | null = null;
  
    // Create Node out of data and attach to end of list
    add(data: number): void {
      const node = new Node(data);
      if (!this.head) {
        this.head = node;
        return;
      }
  
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = node;
    }
  
    // Should return number of Nodes in List
    get length(): number {
        let search = this.head;
        let counter = 1;
        while(search.next) {
            search = search.next
            counter++
        }
        return counter;
    }
  
   // Convenience method that returns a Node at a given index
    at(index: number): Node {
      if (!this.head) {
        throw new Error("Error: Index out of bounds");
      }
      let counter = 0;
      let node: Node | null = this.head;
      while (node) {
        if (counter === index) {
          return node;
        }
        counter++;
        node = node.next;
      }
      throw new Error("Error: Index out of bounds");
    }
  
    compare(leftPos: number, rightPos: number): boolean {
        if (!this.head) {
            throw new Error("Error: Index out of bounds");
        }
        let leftNode = this.at(leftPos)
        let rightNode = this.at(rightPos)
        if (leftNode.data > rightNode.data) return true; else return false;
    }
  
    swap(leftPos: number, rightPos: number): void {
        if (!this.head) {
            throw new Error("Error: Index out of bounds");
        }
        let leftNode = this.at(leftPos);
        let rightNode = this.at(rightPos);
        let leftTemp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftTemp;
        return;
    }
  
    print(): void {
      if (!this.head) {
        return;
      }
      let node: Node | null = this.head;
      while (node) {
        console.log(node.data);
        node = node.next;
      }
    }
  }