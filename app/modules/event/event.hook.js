import sortGenerator from "core/utils/response/sortGeneretor";

export function useFilterEvents(options = {}) {
  let { search, sort, location, startDate, endDate } = options;
  const query = {};

  if (search) {
    query.$text = {
      $search: search,
    };
  }

  if (sort) {
    // we need to create new utility helper

    // dari input title:desc
    // menjadi { title: 1 }
    options.sort = sortGenerator(sort);
  } else {
    options.sort = { createdAt: -1 };
  }

  if (location) {
    query.location = {
      $regex: location,
      $options: "i",
    };
  }

  // input 2020-0101 -> string

  if (startDate && endDate) {
    query.startDate = {
      // greater than equal
      $gte: new Date(startDate),
    };
    query.endDate = {
      // less than equal
      $lte: new Date(endDate),
    };
  }

  return {
    query,
    originalOptions: options,
  };
}
