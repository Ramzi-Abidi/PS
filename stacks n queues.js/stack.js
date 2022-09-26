class Stack {
  constructor() {
    this.el = [];
    this.size = 0;
  }

  push(num) {
    //this.el.unshift(num);     // complexity of unshift is O(n)
    this.el[this.size] = num;
    this.size++;
  }

  pop() {
    if (this.size === 0)
      return undefined;

    let poppedEl = this.el[this.size - 1];
    //free memory :

    this.el.pop();
    this.size--;

    return poppedEl;
  }

  peek() {
    if (this.size === 0)
      return undefined;

    return this.el[this.size - 1];
  }
  isEmpty() {
    return this.size === 0;
  }

  print() {
    this.el.forEach(el => {
      console.log(el);
    });
  }

}


let s = new Stack();

