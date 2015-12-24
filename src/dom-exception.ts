export default class DOMException extends Error {
  name: string;
  code: number;
  constructor(name: string, message: string, code: number) {
    super(message);
    this.name = name;
    this.code = code;
  }
}

export function hierarchyRequestError(): DOMException {
  return new DOMException("HierarchyRequestError", "A Node was inserted somewhere it doesn't belong.", 3);
}
