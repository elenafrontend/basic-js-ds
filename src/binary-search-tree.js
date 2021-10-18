const { prototype } = require('mocha');
const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    class Node {
      constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
      }
    }

    this.rootNode = addNodeWithin(this.rootNode, data);

    function addNodeWithin(node, value) {
      if(!node) {
        return new Node(value);
      }
      if(node.data === value) {
        return node
      }

      if(node.data < value) {
        node.right = addNodeWithin(node.right, value);
      } else {
        node.left = addNodeWithin(node.left, value);
      }

      return node;
    }
  }

  has(data) {
    return hasNodeWithin(this.rootNode, data);

    function hasNodeWithin(node, value) {
      if(!node) {
        return false
      }
      if(node.data === value) {
        return true
      }

      return node.data > value ?
        hasNodeWithin(node.left, value) :
        hasNodeWithin(node.right, value);
    }
  }

  find(data) {
    return findNodeWithin(this.rootNode, data);

    function findNodeWithin(node, value) {
      if(!node) {
        return null;
      }
      if(node.data === value) {
        return node;
      }

      return node.data > value ?
        findNodeWithin(node.left, value) :
        findNodeWithin(node.right, value);
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}


class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}
const tree = new BinarySearchTree();
