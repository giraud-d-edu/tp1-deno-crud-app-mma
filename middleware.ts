import { Context, Next } from "https://deno.land/x/oak@v17.1.4/mod.ts";

export const authenticatedRoute = async (ctx: Context, next: Next) => {
  const isAuthenticated =
    ctx.request.headers.get("Authorization")?.split(" ")[0] === "Basic";
  if (isAuthenticated) {
    await next();
    return;
  }

  ctx.response.status = 401;
  ctx.response.body = { message: "Unauthorized" };
};

export const adminRoute = async (ctx: Context, next: Next) => {
  const isAuthenticated =
    ctx.request.headers.get("Authorization")?.split(" ")[0] === "Basic" &&
    ctx.request.headers.get("Authorization")?.split(" ")[1] ===
      "YWRtaW46dGVzdA=="; // admin:test (base64 encoded)
  if (isAuthenticated) {
    await next();
    return;
  }

  ctx.response.status = 401;
  ctx.response.body = { message: "Unauthorized" };
};
