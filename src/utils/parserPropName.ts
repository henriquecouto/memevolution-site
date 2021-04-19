export default function parserPropName(obj: any, prop: string) {
  const keys = prop.split("-");
  let result = obj[keys[0]];
  if (keys.length > 1) {
    keys.splice(1).forEach((value) => (result = result[value]));
  }
  return result;
}
