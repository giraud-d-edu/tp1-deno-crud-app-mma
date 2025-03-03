import { Context, Next } from "https://deno.land/x/oak@v17.1.4/mod.ts";

const authenticatedRoute = async (ctx: Context, next: Next) => {
    const isAuthenticated = ctx.request.headers
        .get("Authorization")
        ?.split(" ")[0] === "Basic" && 
        ctx.request.headers
        .get("Authorization")
        ?.split(" ")[1] === "TU1BOnRlc3Q="; // MMA:test (base64 encoded)
    if (isAuthenticated) {
        await next();
        return;
    }

    ctx.response.status = 401;
    ctx.response.body = { message: "Unauthorized" };
}

export default authenticatedRoute;