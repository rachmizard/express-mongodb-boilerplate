export default function sortGenerator(string) {
  const sort = {};
  string.split(",").forEach((item) => {
    const [key, value] = item.split(":");
    sort[key] = value === "desc" ? -1 : 1;
  });
  return sort;
}
