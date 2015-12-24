import Node from "./node";
import ChildNodeList from "./child-node-list";
import { NodeListInterface } from "./types";

export default class ContainerNode extends Node {
  private _childNodes: ChildNodeList;

  get childNodes(): NodeListInterface {
    if (!this._childNodes) {
      this._childNodes = new ChildNodeList(this);
    }
    return this._childNodes;
  }
}
