import {
  NodeListInterface,
  NodeInterface
} from "./types";

export default class ChildNodeList implements NodeListInterface {
  _owner: NodeInterface;

  constructor(owner: NodeInterface) {
    this._owner = owner;
  }

  // TODO cache length, invalidate on mutation
  get length() {
    let count = 0;
    let node = this._owner.firstChild;
    while (node) {
      count++;
      node = node.nextSibling;
    }
    return count;
  }

  // TODO cache currentNode and traverse from it, or first, or last
  // depending on what is closer, invalidate on mutation
  item(index: number) {
    let node = this._owner.firstChild;
    for (let i = 0; i < index; i++) {
      node = node.nextSibling;
    }
    return node;
  }
}
