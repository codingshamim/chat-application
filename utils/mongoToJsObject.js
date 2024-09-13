export default function mongoToJsObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}
