# deno-helpers

Covers some day to day usefull helpers

## Usage

Most of the following modules are exposed in `mod.ts`. 

### fs-exists

Test whether or not the given path exists by checking with the file system.

```ts
import { fsExistsSync } from "https://raw.githubusercontent.com/sandbox-space/deno-helpers/main/mod.ts";

fsExistsSync("./foo"); // returns boolean
```

### loop

Infinity timer loop executing second parameter callback function

```ts
import { loop } from "https://raw.githubusercontent.com/sandbox-space/deno-helpers/main/mod.ts";

await loop(5, () => { console.log(new Date().toString()); });
```

### slack

Asynchronous send message over Slack webhook

```ts
import { sendSlackMessage } from "https://raw.githubusercontent.com/sandbox-space/deno-helpers/main/mod.ts";

sendSlackMessage('slack-webhook-url', 'Message body'); // void
```


### sleep

Helpfull for block execution for specific time

```ts
import { sleep } from "https://raw.githubusercontent.com/sandbox-space/deno-helpers/main/mod.ts";

await sleep(5);
```

