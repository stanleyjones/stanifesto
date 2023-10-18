---
title: An itsy-bitsy to-do app
date: 2023-10-11
layout: post.hbs
---

Out of frustration with growing bundle sizes and package dependencies when building with
a JavaScript framework, over the summer I built an experimental web app with the
challenge of artificially limiting myself to the (quite capable!) native browser APIs.

---

[Itsy](https://github.com/stanleyjones/itsy) is an itsy-bitsy to-do app that is mostly an
experiment in learning to live without third-party libraries. If you look at the project
on GitHub, you'll notice that there's not even a `package.json`.

The goal was to reproduce a React-like developer experience but without any of the cruft
that has accumulated over the last ten years of web development. My hypothesis was that
many of the features for which we require frameworks are now built into the browser.

The real reward came from forcing me to dig into a lot of the libraries I typically reach
for without thinking to understand what's happening under the surface.

## Web Components

Ah yes, [Web Components](https://www.webcomponents.org/). They've been around for a long
time but have never reached their potential. But it's 2023 now and some great frameworks
(like [Lit](https://lit.dev/) and [Stencil](https://stenciljs.com/)) have Web Components
as their base.

I spent a little time reading the source code of Lit to understand its structure and built
an inheritable `BaseElement` class that would let me write a component like this:

```js
import BaseElement from "/lib/base-element.js";
import { toggleTodo } from "/src/itsy-store.js";

export default class ItsyTodo extends BaseElement {
  attributes = ["id", "name", "done"];
  css = `
    .itsy-todo {
      list-style: none;
    }
  `;
  events = {
    change: (event) => toggleTodo(event, this.attrs.id),
  };

  render() {
    const { name, done } = this.attrs;
    return `
      <li class="itsy-todo">
        <input type="checkbox" ${done ? "checked " : ""}/>
        ${name}
      </li>
    `;
  }
}
```

There are always additional improvements to be made, but the basic lifecycle is working —
including rendering to the DOM — all without any `JSX` anywhere. That's just a plain old
JavaScript template literal returned by the `render` method. The event listener approach is inspired by [Backbone](https://backbonejs.org/), which I confess that I still love.

## Application State

You'll notice that the above component imports a store for handling application state.
I've been using [Zustand](https://zustand-demo.pmnd.rs/) lately, because it's a little simpler than something like
[Redux](https://redux.js.org/) and integrates will with React hooks. Again, I took some time to read the source
code for all of those libraries and was surprised at how simple and easily reproducible
they were.

```js
export default function createStore(initState = {}) {
  let state = initState;
  const listeners = new Set();

  const setState = (change, replace = false) => {
    const nextState = typeof change === "function" ? change(state) : change;
    if (!Object.is(state, nextState)) {
      state = replace ? nextState : { ...state, ...nextState };
      listeners.forEach((listener) => listener(state));
    }
  };

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { setState, getState, subscribe };
}
```

It's even a _little_ fancy in that it can accept a function as the payload of an action,
which it will call with the current state as an argument.

Latching application state to Web Component lifecycle meant writing an inheritable `ContainerElement`, which again was simpler than I expected. Just subscribe to state and update, basically.

```js
import ContainerElement from "/lib/container-element.js";
import store from "/src/itsy-store.js";

export default class ItsyTodos extends ContainerElement {
  attributes = ["todos"];

  constructor() {
    super();
    this.connect(store);
  }

  render() {
    const { todos } = this.attrs;
    return `
      <ul class="itsy-todos">
        ${todos
          .map(
            ({ id, name, done }) =>
              `<itsy-todo id="${id}" name="${name}" done="${done}"></itsy-todo>`
          )
          .join("")}
      </ul>
    `;
  }
}
```

## Running locally

You can run Itsy without installing any node modules. It uses `npx` to launch a [Web Dev
Server](https://modern-web.dev/guides/dev-server/getting-started/) locally, but then is
completely self-contained. It uses [ES6
modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) to import
code as needed. This approach is surprisngly well supported across all browsers.

## Testing

I was now accumulating local library code and wanted unit tests to keep it maintainable. [Web Test
Runner](https://modern-web.dev/guides/test-runner/) looked good, but requires a `devDependency` for an assertion library.

I started reading source code for [Jest](https://jestjs.io/), [Chai](https://www.chaijs.com/), etc. and disliked the complexity required to support the `expect(x).to.deep.equal(y)` chaining syntax. I wanted something more like Rust’s `assert_eq`. Turns out, not so hard!

```js
export function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

export function assertEq(...args) {
  const [left, right] = args.map(JSON.stringify);
  assert(left === right, `Expected ${left} to equal ${right}`);
}
```

Are there edge cases? Absolutely! Did I have to import any packages? Absolutely not.

## Conclusion

In summary, it’s hard to justify shipping huge bundles of JS to end users in 2023. Putting it all together, I think I’d use [import maps](https://caniuse.com/import-maps) once they're universally supported to pull any necessary front-end libraries from a CDN. I’d keep development dependencies, mainly for TypeScript, but still ship transpiled ES6 modules instead of a single bundle.

---

If you liked this post, check out a [similar experiment](https://github.com/stanleyjones/yujin) where I use Rust-based
[WebAssembly](https://webassembly.org/) running in a [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) to intercept requests and re-encode them as
`application/cbor`. Technically, there’s still a build step as it uses `wasm-pack` to compile the Rust and expose its public functions. It’s not quite done but shows promise.
