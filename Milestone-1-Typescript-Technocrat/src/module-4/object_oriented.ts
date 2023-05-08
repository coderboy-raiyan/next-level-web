class HashNode {
  public data: any;
  constructor(public length: number) {
    this.data = [];
    this.length = length;
  }
  public push(key: number, value: number) {
    if (this.data[key]) {
      this.data[key].push(value);
    } else {
      this.data[key] = [value];
    }
  }
}

const hashNode = new HashNode(5);
hashNode.push(2, 50);
hashNode.push(2, 30);
console.log(hashNode);
