function sortGenerator(stringValue) {
  // stringValue = "title:desc, desc:asc"

  const sort = {};

  stringValue.split(",").forEach((item) => {
    const [key, value] = item.split(":"); // ["title", "desc"]

    sort[key] = value === "desc" ? -1 : 1;
  }); // ["title:desc", "desc:asc"]

  return sort;
}

export default sortGenerator;
