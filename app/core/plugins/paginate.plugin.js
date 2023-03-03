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

    const results = await this.find(query)
      .select(projection)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .exec(callback);

    const count = await this.countDocuments(query).exec();

    return {
      results,
      count: parseInt(count),
      page: parseInt(page),
      limit: parseInt(limit),
    };
  };
}

export default paginatePlugin;
