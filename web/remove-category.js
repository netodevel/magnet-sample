const db = require('../repository')

export const route = {
  method: 'delete',
  path: '/category',
  type: 'json',
};

export default async (req) => {
  const category = await db.categories().del(req.body.id)
  return category;
};

