
# example-worker-wasm
Examples of Next.js with Web Workers and WebAssembly (Rust) for improved performance.

## Requirement
* Node.js v20 or later.
* [Rust](https://www.rust-lang.org/tools/install)
  * [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

## Build Setup

```bash
# Install dependencies
$ yarn

# Run the development mode. wasm(rust) is also development mode, too slower.
$ yarn dev

# Run the production mode
$ yarn build
$ yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
