# HTML

## Usage

```js
import { HTML } from "https://code4fukui.github.io/HTML/HTML.js";

console.log(HTML.encode("a&b")); // a&amp;b
console.log(HTML.encode("<a>")); // &lt;a&gt;
console.log(HTML.decode("&amp;")); // &
console.log(HTML.decode("&gt;&lt;")); // ><
console.log(HTML.decode("&crarr;")); // ↵
```

## reference

- [13.5 Named character references - HTML Standard](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)
