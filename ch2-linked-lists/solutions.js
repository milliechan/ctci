//2.1 write code to remove duplicates from an unsorted linked list
// use hash? 
// loop through linked list starting from the head, and keep track with a hash
// set variables for current and next
// if there is a duplicate, set pointer of next to the next next node 

function LinkedList(){
  this.head = null;
}

LinkedList.prototype.push = function(val){
  var node = {
    value: val, 
    next: null
  }
  if(!this.head){
    this.head = node;
  } else {
    current = this.head; 

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
}

function removeDups(list){
  if (list.head === null || list.head.next === null) {
    return null;
  }

  var current = list.head;

  while (current !== null) {
    var runner = current; 
    while (runner.next !== null) {
      if (runner.next.value === current.value) {
        runner.next = runner.next.next;
        this.length--;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  return list;
}

var test_sll = {head: {value:1, next:{value: 2, next: {value: 3, next: {value:1, next:null}}}}}
console.log('----------remove dups');
console.log(removeDups(test_sll))

// return kth to last: implement an algo to find the kth to last element of a singly linked list

function kthToLast(sll, k) {
  var node = sll.head, 
      i = 1, 
      kthNode;
  console.log('original', kthNode)      
  //handle, 0 or negative value of k
  if (k <= 0) return;

  while (node){
    if(i == k ) {
      kthNode = sll.head; 
    } else if (i-k > 0) {
      kthNode = kthNode.next;
    } 
    i++;
    node = node.next;
    console.log('kthNode', kthNode)
  }
  return kthNode;
}

//create the LL
var sll = new LinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);

//test at least 
console.log('------kth to last')
console.log(kthToLast(sll, 1)); //Object {value: 5, next: null}
console.log(kthToLast(sll, 3)); //Object {value: 3, next: Object}

function printKthToLast(sll, k){
  var node = sll.head 
  if (head == null) {
    return 0;
  }
  var index = printKthToLast(head.next, k) + 1; 
  if( index === k ) {
    console.log(k + "th to last node is " + head.value);
  }
  return index;
}

function kthToLastIterative(sll, k) {
  p1 = sll.head; 
  p2 = sll.head; 

  // move p1 k nodes into the list 
  for(var i = 0; i < k; i++){
    if (p1 === null) return null // out of bounds 
    p1 = p1.next;
  }

  // move them at same pace. when p1 hits the end, p2 will be at the right element
  while (p1 != null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
}



// 2.3 delete middle node; implement an algo to delete a node in the middle (ie. any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node 
// input: the node c from the linked list a->b->c->d->e->f
// result: nothing is returned, but the new linked list looks like a->b->d->e->f

function deleteNode(node) {
  if (node == null || node.next == null) {
    return false; //failure
  }
  var next = node.next;
  node.value = next.next; 
  return true;
}

// 2.4 partition: write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. if x is contained within the list, the values of x only need to be after the elements less than x. 
// input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 (partition = 5)
// output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

function partition(sll, x) {
  var node = sll.head
  var beforeStart = null,
      beforeEnd = null,
      afterStart = null, 
      afterEnd = null;

  //partition list
  while (node != null) {
    var next = node.next; 
    node.next = null; 
    if (node.value < x) {
      //insert node into end of beforelist 
      if (beforeStart == null) {
        beforeStart = node; 
        beforeEnd = beforeStart;
      } else {
        beforeEnd.next = node; 
        beforeEnd = node;
      }
    } else {
      //insert node into end of after list
      if (afterStart == null) {
        afterStart = node; 
        afterEnd = afterStart; 
      } else {
        afterEnd.next = node;
        afterEnd = afterStart;
      } 
    }
    node = next;
  }

  if (beforeStart == null) {
    return afterStart;
  }
  //merge before list and after list 
  beforeEnd.next = afterStart;
  return beforeStart;
}

function partition(node, x) {
  var head = node.head; 
  var tail = node.head;

  while (node != null) {
    var next = head.next
    if (node.value < x) {
      //insert node at head 
      node.next = head; 
      head = node; 
    } else {
      //insert node at tail 
      tail.next = node;
      tail = node;
    }
    node = next;
  }
  tail.next = null;
  // head has changed, so we need to return it to the user
  return head;
}





