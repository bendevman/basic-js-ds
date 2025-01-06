const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.theRoot = null;
  }

  root() {
    return this.theRoot;
  }

  add(data) {
    this.theRoot = addNode(this.theRoot, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if(node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return checkNode(this.theRoot, data);

    function checkNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return checkNode(node.left, data);
      } else {
        return checkNode(node.right, data);
      }
    }
  }

  find(data) {
    return searchNode(this.theRoot, data);

    function searchNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.theRoot = deleteNode(this.theRoot, data);

    function deleteNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = deleteNode(node.right, data);
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
        let minFomRight = node.right;
        while (minFomRight.left) {
          minFomRight = minFomRight.left;
        }
        node.data = minFomRight.data;
        node.right = deleteNode(node.right, minFomRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.theRoot) {
      return null;
    }
    let node = this.theRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.theRoot) {
      return null;
    }
    let node = this.theRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};