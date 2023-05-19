module.exports = {
  routes: [
    {
      method: "GET",
      path: "/nearby-stores",
      handler: "nearby-stores.find_nearby",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
