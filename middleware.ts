import "jsr:@std/dotenv/load";
import { Context, Next } from "./deps.ts";

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
  const adminCredentials = Deno.env.get("ADMIN_CREDENTIALS");
  const isAuthenticated =
    ctx.request.headers.get("Authorization")?.split(" ")[0] === "Basic" &&
    ctx.request.headers.get("Authorization")?.split(" ")[1] ===
      adminCredentials;
  if (isAuthenticated) {
    await next();
    return;
  }

  ctx.response.status = 401;
  ctx.response.body = { message: "Unauthorized" };
};
