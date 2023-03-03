import sortGenerator from "core/utils/sortGenerator";

export function useFilterEvents(params = {}) {
  const { search, sort, location, startDate, endDate } = params;
  const queries = {};

  if (search) {
    queries.$text = {
      $search: search,
    };
  }

  if (sort) {
    params.sort = sortGenerator(sort);
  } else {
    params.sort = {
      startDate: -1,
    };
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

  return {
    queries,
    params,
  };
}
