import { rest } from "msw";

const handlers = [
  rest.get("/api/products", (req, res, ctx) => {
    const errorCode = req.url.searchParams.get("error_code");

    if (errorCode) {
      return res(ctx.status(errorCode));
    }

    return res(
      ctx.status(200),
      ctx.delay(4000),
      ctx.json({
        items: [{ name: "product-1" }, { name: "product-2" }],
      })
    );
  }),
];

export default handlers;
