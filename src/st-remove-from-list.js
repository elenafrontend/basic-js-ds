const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  let current = l;
  let prev;
  
  while(current.next) {
    if (current.value === k) {

      if(prev) {
        prev.next = current.next
        prev = current;
      } else {
        l = current.next;
      }
    } else {
      prev = current;
    }
    current = current.next;
  }
  return l;
}

/* const { testOptional, ListNode } = require('../extensions/index.js');

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

const k = 3
const l = convertArrayToList([3, 1, 2, 3, 4, 5])

function removeKFromList(l, k) {
  let current = l;
  let prev;
  
  while(current.next) {
    console.log('Current before:', current)
    
    if (current.value === k) {

      if(prev) {
        prev.next = current.next
        prev = current;
      } else {
        l = current.next;
        console.log(l)
      }
    } else {
      prev = current;
    }
    current = current.next;
    console.log('Current after:', current)
  }

  console.log(l)
}

removeKFromList(l, k);
*/
