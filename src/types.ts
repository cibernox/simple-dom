export enum NodeType {
  ELEMENT_NODE = 1,
  TEXT_NODE = 3,
  COMMENT_NODE = 8,
  DOCUMENT_NODE = 9,
  DOCUMENT_FRAGMENT_NODE = 11
}

export interface NodeInterface {
  nodeType: NodeType;
  nodeName: string;
  nodeValue: string;
  childNodes: NodeListInterface;

  parentNode: NodeInterface;
  previousSibling: NodeInterface;
  nextSibling: NodeInterface;
  firstChild: NodeInterface;
  lastChild: NodeInterface;

  ownerDocument: DocumentInterface;

  insertBefore(newChild: NodeInterface, refChild: NodeInterface): NodeInterface;
  replaceChild(newChild: NodeInterface, oldChild: NodeInterface): NodeInterface;
  removeChild(child: NodeInterface): NodeInterface;
  appendChild(newChild: NodeInterface): NodeInterface;
}

export interface CharacterData {
  length: number;
  data: string;
}

export interface NodeListInterface {
  length: number;
  item(index: number): NodeInterface;
}

export interface DocumentInterface extends NodeInterface {
}

export interface CommentInterface extends CharacterData, NodeInterface {
}

export interface TextInterface extends CharacterData, NodeInterface {
}
