//basic template of the class node for the 

class _Node {
    constructor(data, next) {
      this.data = data;
      this.next = next;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
    }
  
    push(data) {
      // if the stack is empty, then the node will be on top
      // of the stack
      if (this.top === null) {
        this.top = new _Node(data, null);
        return this.top;
      }
      // if the stack has something then create a new node,
      // add data to the new node and point the pointer to the top
      const node = new _Node(data, this.top);
      this.top = node;
    }
  
    pop() {
      // to remove the top of the stack, point the pointer to the
      // next item and that item becomes the top of the stack
      const node = this.top;
      this.top = node.next;
      console.log('stack node', node.data)
    }
  }
  // 1. Star Trek
  function main() {
    let starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    // console.log(peek(starTrek));
  
    starTrek.pop(); // remove Scotty
    starTrek.pop(); // remove McCoy
    starTrek.push('Scotty'); // add Scotty
    // console.log(display(starTrek));
  }
  
  // 2. Useful methods
  function peek(stack) {
    // check to see if the stack has any data
    if (stack.top === null) {
      return null;
    }
    // return the top data (last)
    return stack.top.data;
  }

  function isEmpty(stack) {
    if (stack.top === null) {
      return 'stack is empty';
    }
    // console.log('isEmpty', stack)
  }


  //display first item in stack

function display(stack) {
    if (stack=== null){
        return null;
    }
    // console.log('display', stack)

}

display()


main()


function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  let pal = new Stack();
  pal.push()
  
  if (pal === pal){
    return "is a palindrome"
  }
  else{
    return "is not a palindrome"
  }
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
