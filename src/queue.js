const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null
    this.length = 0
  }
  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    let node = new ListNode (value)
    let current
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  dequeue(index = 0) {
    if (index < 0 || index > this.length) {
      return null
    }
    let current = this.head

    if (index === 0) {
      this.head = current.next
    } else {
      let prev = null
      let count = 0
      while(count < index) {
        prev = current
        current = current.next
        count++
      }
      prev.next = current.next;
    }
    this.length--
    return current.value
  }
}
module.exports = {
  Queue
};
