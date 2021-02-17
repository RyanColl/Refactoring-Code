import { Node } from "./node"
import { ISortable } from './interface'

export class LinkedListGroup implements ISortable {
    head: Node | null = null;
  
    // Create Node out of data and attach to end of list
    add(data: number): void {
      const node = new Node(data);
      if (!this.head) {
        this.head = node;
        console.log(this.head.data)
        return;
      }
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      console.log(this.head.data)
      tail.next = node;
      return;
    }
  
    // Should return number of Nodes in List
    get length(): number {
        let search = this.head;
        let counter = 0;
        while(search.next) {
            search = search.next
            counter++
        }
        console.log(`The Linked List Contains ${counter} Nodes`)
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
        let node: Node | null = this.head;
        let counter = 0;
        let posL = 0;
        let posR = 0;
        while(node) {
            if (counter === leftPos) {
                posL = node.data
            }
            if(counter === rightPos) {
                posR = node.data
            }
            counter++;
            node = node.next;
        }
        if(posL > posR) return true;
        else return false;
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

        // ***
        // unique method, but I do not need to make new nodes. The junior developer has quietly added an "at" function, how convenient
        // ***
        // let node: Node | null = this.head;
        // let counter = 0;
        // let posL = 0;
        // let uniqueLeft = 0;
        // let posR = 0;
        // let uniqueRight = 0;
        // while(node) {
        //     if (counter === leftPos) {
        //         posL = node.data
        //         uniqueLeft = counter;
        //     }
        //     if(counter === rightPos) {
        //         posR = node.data
        //         uniqueRight = counter;
        //     }
        //     counter++;
        //     node = node.next;
        // }
        // if(posL > posR) {
        //     node = this.head
        //     counter = 0;
        //     const newnode1 = new Node(posR)
        //     const newnode2 = new Node(posL)
        //     newnode1.next = newnode2;
        //     while(node) {
        //         if (counter == (uniqueLeft - 1)) {
        //             node.next = newnode1
        //         }
        //         if (counter == (uniqueRight + 1)) {
        //             newnode2.next = node;
        //         }
        //         counter++;
        //         node = node.next;
        //     }
        // }
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