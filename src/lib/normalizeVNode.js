export function normalizeVNode(vNode) {
  if (vNode === null || vNode === undefined) {
    return "";
  }
  if (typeof vNode === "boolean") {
    return "";
  }

  if (typeof vNode === "number" || typeof vNode === "string") {
    return vNode.toString();
  }
  return vNode;
}
