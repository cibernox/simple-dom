import { NodeType, DocumentInterface, NodeListInterface, NodeInterface } from "./types";
import ChildNodeList from "./child-node-list";
import { hierarchyRequestError } from "./dom-exception";

const EMPTY_NODE_LIST: NodeListInterface = {
  length: 0,
  item() { return null; }
};

abstract class Node implements NodeInterface {
  static ELEMENT_NODE = NodeType.ELEMENT_NODE;
  static TEXT_NODE = NodeType.TEXT_NODE;
  static COMMENT_NODE = NodeType.COMMENT_NODE;
  static DOCUMENT_NODE = NodeType.DOCUMENT_NODE;
  static DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE;

  ownerDocument: DocumentInterface;
  nodeType: NodeType;
  nodeName: string;
  nodeValue: string;

  parentNode = null;
  firstChild = null;
  lastChild = null;
  previousSibling = null;
  nextSibling = null;

  constructor(ownerDocument: DocumentInterface, nodeType: NodeType, nodeName: string, nodeValue: string) {
    this.ownerDocument = ownerDocument;
    this.nodeType = nodeType;
    this.nodeName = nodeName;
    this.nodeValue = nodeValue;
  }

  get childNodes(): NodeListInterface {
    return EMPTY_NODE_LIST;
  }

  insertBefore(): NodeInterface {
    throw hierarchyRequestError();
  }

  replaceChild(): NodeInterface {
    throw hierarchyRequestError();
  }

  removeChild(): NodeInterface {
    throw hierarchyRequestError();
  }

  appendChild(): NodeInterface {
    throw hierarchyRequestError();
  }
}

export default Node;
