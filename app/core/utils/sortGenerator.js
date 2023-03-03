/**
 *
 * @param {string} stringSort
 * @example
 */

export default function sortGenerator(stringSort) {
  console.log("wkwk", stringSort);
  const sort = {};
  stringSort.split(",").forEach((item) => {
    const [key, value] = item.split(":");
    sort[key] = value === "desc" ? -1 : 1;
  });

  return sort;
}
