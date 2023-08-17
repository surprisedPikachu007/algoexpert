const process = require("process");

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  add(value) {
    let temp = this;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = new LinkedList(value);
  }

  print() {
    let temp = this;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  const set = new Set();

  let cur = linkedList;
  let prev = null;
  while (cur !== null) {
    if (set.has(cur.value)) {
      prev.next = cur.next;
    } else {
      set.add(cur.value);
      prev = cur;
    }
    cur = cur.next;
  }

  return linkedList;
}

let linkedList = new LinkedList(1);
linkedList.add(1);
linkedList.add(3);
linkedList.add(4);
linkedList.add(4);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);
linkedList.add(6);

linkedList = removeDuplicatesFromLinkedList(linkedList);
linkedList.print();
