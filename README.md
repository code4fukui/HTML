# HTML

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple library to encode and decode HTML entities.

## Usage

```js
import { HTML } from "https://code4fukui.github.io/HTML/HTML.js";

console.log(HTML.encode("a&b")); // a&amp;b
console.log(HTML.encode("<a>")); // &lt;a&gt;
console.log(HTML.decode("&amp;")); // &
console.log(HTML.decode("&gt;&lt;")); // ><
console.log(HTML.decode("&crarr;")); // ↵
```

## License

See [LICENSE](LICENSE) for details.