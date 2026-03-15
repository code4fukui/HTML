# HTML

HTMLにおける文字列のエンコーディングやデコーディングを行うユーティリティです。

## 使い方

```js
import { HTML } from "https://code4fukui.github.io/HTML/HTML.js";

console.log(HTML.encode("a&b")); // a&amp;b
console.log(HTML.encode("<a>")); // &lt;a&gt;
console.log(HTML.decode("&amp;")); // &
console.log(HTML.decode("&gt;&lt;")); // ><
console.log(HTML.decode("&crarr;")); // ↵
```

## ライセンス

[LICENSE](LICENSE) を参照してください。