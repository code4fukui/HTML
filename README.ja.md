# HTML

Denoおよびブラウザ向けの、HTMLエンティティをエンコードおよびデコードするシンプルで依存関係のないライブラリです。

## 機能

- **エンコード**: `&`、`<`、`>` を対応するHTMLエンティティに変換します。
- **デコード**: 厳選された一般的な名前付きエンティティ（例: `&amp;`、`&copy;`、`&rarr;`）を元の文字に変換します。
- **堅牢性**: デコード時、サポートされていないエンティティを適切に無視します。
- **軽量**: 外部依存関係のない単一のESモジュールです。

## 使い方

URLから直接モジュールをインポートします:

```js
import { HTML } from "https://code4fukui.github.io/HTML/HTML.js";

// エンコード
console.log(HTML.encode("a&b")); // a&amp;b
console.log(HTML.encode("<a>")); // &lt;a&gt;

// デコード
console.log(HTML.decode("&amp;")); // &
console.log(HTML.decode("&gt;&lt;")); // ><
console.log(HTML.decode("&crarr;")); // ↵
console.log(HTML.decode("&unknown;")); // &unknown; (サポートされていないエンティティは無視されます)
```

## API

### `HTML.encode(string)`

文字列内の `&`、`<`、`>` を `&amp;`、`&lt;`、`&gt;` にエンコードします。

### `HTML.decode(string)`

文字列内のサポートされているすべての名前付きHTMLエンティティをデコードします。サポートリストにないエンティティはそのまま保持されます。

### `HTML.getSpecialChars()`

サポートされているエンティティ名（例: `amp`）と、それに対応する文字（例: `&`）をマッピングしたオブジェクトを返します。

## サポートされている名前付きエンティティ

`decode` メソッドは次のエンティティをサポートしています:

`&amp;` `&lt;` `&gt;` `&quot;` `&times;` `&reg;` `&copy;` `&rsquo;` `&lsquo;` `&sbquo;` `&rdquo;` `&ldquo;` `&deg;` `&nbsp;` `&hookleftarrow;` `&crarr;` `&hellip;` `&rarr;` `&larr;`

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
