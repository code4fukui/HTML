# HTML

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple, zero-dependency library to encode and decode HTML entities for Deno and browsers.

## Features

-   **Encode**: Converts `&`, `<`, and `>` to their corresponding HTML entities.
-   **Decode**: Converts a curated set of common named entities (e.g., `&amp;`, `&copy;`, `&rarr;`) back to characters.
-   **Robust**: Gracefully ignores any unsupported entities during decoding.
-   **Lightweight**: A single ES module with no external dependencies.

## Usage

Import the module directly from the URL:

```js
import { HTML } from "https://code4fukui.github.io/HTML/HTML.js";

// Encoding
console.log(HTML.encode("a&b")); // a&amp;b
console.log(HTML.encode("<a>")); // &lt;a&gt;

// Decoding
console.log(HTML.decode("&amp;")); // &
console.log(HTML.decode("&gt;&lt;")); // ><
console.log(HTML.decode("&crarr;")); // ↵
console.log(HTML.decode("&unknown;")); // &unknown; (unsupported entities are ignored)
```

## API

### `HTML.encode(string)`

Encodes the characters `&`, `<`, and `>` within a string into `&amp;`, `&lt;`, and `&gt;`.

### `HTML.decode(string)`

Decodes all supported named HTML entities in a string. Any entities not in the supported list will be left unchanged.

### `HTML.getSpecialChars()`

Returns an object mapping supported entity names (e.g., `amp`) to their corresponding character values (e.g., `&`).

## Supported Named Entities

The `decode` method supports the following entities:

`&amp;` `&lt;` `&gt;` `&quot;` `&times;` `&reg;` `&copy;` `&rsquo;` `&lsquo;` `&sbquo;` `&rdquo;` `&ldquo;` `&deg;` `&nbsp;` `&hookleftarrow;` `&crarr;` `&hellip;` `&rarr;` `&larr;`

## License

MIT License — see [LICENSE](LICENSE).