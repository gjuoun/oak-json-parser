import { Context } from "https://deno.land/x/oak/mod.ts";

declare module "https://deno.land/x/oak/mod.ts" {
  interface Request {
    json: Record<string, string>,
  }
}

export function jsonParser(options: any = null) {
  return async function (ctx: Context, next: Function) {
    // if request has body
    if (ctx.request.hasBody) {
      try {
        let jsonObj = await ctx.request.body({ contentTypes: { json: [] } })
        ctx.request.json = <Record<string, string>>jsonObj.value
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
