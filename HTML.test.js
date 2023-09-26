import * as t from "https://deno.land/std/testing/asserts.ts";
import { HTML } from "./HTML.js";

Deno.test("encode", () => {
  t.assertEquals(HTML.encode("abc"), "abc");
  t.assertEquals(HTML.encode("a&bc"), "a&amp;bc");
  t.assertEquals(HTML.encode("a&b&c"), "a&amp;b&amp;c");
  t.assertEquals(HTML.encode("a&&c"), "a&amp;&amp;c");
});
Deno.test("decode", () => {
  t.assertEquals(HTML.decode("abc"), "abc");
  t.assertEquals(HTML.decode("a&amp;bc"), "a&bc");
  t.assertEquals(HTML.decode("a&amp;b&amp;c"), "a&b&c");
  t.assertEquals(HTML.decode("a&amp;&amp;c"), "a&&c");
});
Deno.test("decode < >", () => {
  t.assertEquals(HTML.decode("&gt;"), ">");
  t.assertEquals(HTML.decode("&lt;&gt;"), "<>");
  t.assertEquals(HTML.decode("&lt;&gt;"), "<>");
});
Deno.test("special chars", () => {
  //console.log(Object.keys(HTML.getSpecialChars()).map(s => "&" + s + ";").join(""));
  //console.log(Object.values(HTML.getSpecialChars()).join(""));
  t.assertEquals(HTML.decode("&gt;&lt;&amp;&times;&quot;&reg;&copy;&rsquo;&lsquo;&sbquo;&rdquo;&deg;&nbsp;&hookleftarrow;"), `><&×"®©’‘“”° ↩`)
});
Deno.test("decode no defines", () => {
  t.assertEquals(HTML.decode("&aa;"), "&aa;");
  t.assertEquals(HTML.decode("&ab&aa;"), "&ab&aa;");
});
Deno.test("helip", () => {
  t.assertEquals(HTML.decode("&hellip;"), "…");
});
