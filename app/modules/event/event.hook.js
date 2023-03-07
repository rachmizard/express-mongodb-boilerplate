import sortGenerator from "core/utils/sortGenerator";

export function useFilterEvents(queryParams = {}) {
  const { search, sort, location, startDate, endDate } = queryParams;

  const queries = {};

  if (search) {
    queries.$text = {
      $search: search,
    };
  }

  if (!sort) {
    queryParams.sort = { startDate: -1 };
  } else {
    queryParams.sort = sortGenerator(sort);
  }

  if (location) {
    queries.location = {
      $regex: location,
      $options: "i",
    };
  }

  if (startDate && endDate) {
    queries.startDate = {
      $gte: new Date(startDate),
    };
    queries.endDate = {
      $lte: new Date(endDate),
    };
  }

  return {queries, queryParams};
}
