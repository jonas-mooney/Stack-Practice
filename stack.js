

class Stack {
  constructor() {
    this.data = [];
  }
  push(info) {
    this.data.push(info);
  } 
  
  pop() {
    return this.data.pop();
  }
  
  peek() {
    return this.data[this.data.length - 1];
  }

  size() {
    return this.data.length;
  }
}