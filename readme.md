## JSON Parser

> Parsing JSON middleware for oka framework

### Usage 

```ts
// import oak framework
import { Application } from "https://deno.land/x/oak/mod.ts";
// import json parser
import { jsonParser } from "https://raw.githubusercontent.com/gjuoun/oak-json-parser/master/mod.ts"

const app = new Application();

app.use(jsonParser())

app.use(async (ctx) => {
  ctx.request.json // will become available
});

await app.listen({ port: 8000 });
```

