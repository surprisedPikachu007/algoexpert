class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);

    for (let i = 0; i < this.children.length; i++) {
      this.children[i].depthFirstSearch(array);
    }

    return array;
  }
}

let node = new Node("A");
node.addChild("B");
node.addChild("C");
node.addChild("D");
node.children[0].addChild("E");
node.children[0].addChild("F");
node.children[2].addChild("G");
node.children[2].addChild("H");
node.children[0].children[1].addChild("I");
node.children[0].children[1].addChild("J");
node.children[2].children[0].addChild("K");

console.log(node.depthFirstSearch([]));
