import { Context } from "https://deno.land/x/oak/mod.ts";
declare module "https://deno.land/x/oak/mod.ts" {
  interface Request {
    json: object,
  }
}

export function jsonParser(options: any = null) {
  return async function (ctx: Context, next: Function) {
    // if request has body
    if (ctx.request.hasBody) {
      try {
        let jsonBody= await ctx.request.body({ contentTypes: { json: [] } })
        ctx.request.json = jsonBody.value
        next()
      }
      catch (e) {
        ctx.request.json = {}
        next()
      }
    } else {
      next();
    }
  };
}
