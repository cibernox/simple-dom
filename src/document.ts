import { NodeType, DocumentInterface } from "./types";
import ContainerNode from "./container-node";

export default class Document extends ContainerNode implements DocumentInterface {
  constructor() {
    super(null, NodeType.DOCUMENT_NODE, "#document", null);
  }
}
