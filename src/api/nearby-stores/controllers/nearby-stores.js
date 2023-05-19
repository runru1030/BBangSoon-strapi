"use strict";

/**
 * A set of functions called "actions" for `nearby-stores`
 */

module.exports = {
  async find_nearby(ctx) {
    try {
      const { curr_x, curr_y } = ctx.request.query;

      const distanceQuery = `
      SELECT *, (ABS(${parseFloat(curr_x)} - S.loc_x) + ABS(${parseFloat(
        curr_y
      )} - S.loc_y)) * 100 as distance
      FROM Stores as S
      Where distance < 1
      ORDER BY ABS(${parseFloat(curr_x)} - S.loc_x) + ABS(${parseFloat(
        curr_y
      )} - S.loc_y) ASC
      `;
      let res = await strapi.db.connection.raw(distanceQuery);
      ctx.body = res;
    } catch (error) {
      ctx.badRequest("컨트롤러에서 에러 발생", {
        moreDetails: error,
      });
    }
  },
};
