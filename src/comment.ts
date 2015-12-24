import Node from "./node";
import {
  NodeType,
  DocumentInterface,
  CommentInterface
} from "./types";

export default class Comment extends Node implements CommentInterface {
  constructor(ownerDocument: DocumentInterface, nodeValue: string) {
    super(ownerDocument, NodeType.COMMENT_NODE, "#comment", nodeValue);
  }

  get length(): number {
    return this.nodeValue.length;
  }

  get data(): string {
    return this.nodeValue;
  }

  set data(nodeValue: string) {
    this.nodeValue = nodeValue;
  }
}
