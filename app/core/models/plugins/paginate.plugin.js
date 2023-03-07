function paginatePlugin(schema) {
  schema.statics.paginate = async function (
    query,
    options,
    projection,
    callback
  ) {
    const sort = options?.sort || {};
    const limit = options?.limit || 10;
    const page = options?.page || 1;
    const skip = (page - 1) * limit;

    const [count, results] = await Promise.all([
      await this.countDocuments(query).exec(callback),
      await this.find(query)
        .select(projection)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .exec(callback),
    ]);

    return {
      results,
      page: parseInt(page),
      limit: parseInt(limit),
      count: parseInt(count),
    };
  };
}

export default paginatePlugin;
