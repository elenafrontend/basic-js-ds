const { prototype } = require('mocha');
const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// module.exports = 
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

      if(node.data > value) {
        node.left = addNodeWithin(node.left, value);
      } else {
        node.right = addNodeWithin(node.right, value);
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

  remove(data) {
    this.rootNode = removeNodeWithin(this.rootNode, data);

    function removeNodeWithin(node, value) {
      if(!node) {
        return null;
      }

      if(node.data > value) {
        node.left = removeNodeWithin(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNodeWithin(node.right, value);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        } 
				
				if (!node.left) {
          node = node.right;
          return node;
        } 
				
				if (!node.right) {
          node = node.left;
          return node;
        } 

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;

        node.left = removeNodeWithin(node.left, maxFromLeft.data);
        
        return node;
      }

    }
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


