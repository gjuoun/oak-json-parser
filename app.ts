// import oak framework
import { Application } from "https://deno.land/x/oak/mod.ts";
import {jsonParser} from "./mod.ts"

const app = new Application();

app.use(jsonParser())

app.use((ctx) => {

  ctx.request.json

});

await app.listen({ port: 8000 });