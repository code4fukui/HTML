// https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references

const spchars = {
  gt: ">",
  lt: "<",
  amp: "&",
  times: "×",
  quot: "\"",
  reg: "®",
  copy: "©",
  rsquo: "’",
  lsquo: "‘",
  sbquo: "“",
  rdquo: "”",
  ldquo: "\u201C",
  deg: "°",
  nbsp: " ",
  hookleftarrow: "↩",
  crarr: "↵",
  hellip: "…",
  rarr:	"→",
  larr: "←",
};

export const HTML = {
  decode(s) {
    const n = s.indexOf("&");
    if (n < 0) {
      return s;
    }
    const m = s.indexOf(";", n + 1);
    if (m < 0) {
      return s;
    }

    const res = [];
    const sp = s.substring(n + 1, m);
    const c = spchars[sp];
    let p = m + 1;
    if (!c) {
      console.log("unsupported special char", sp);
      res.push(s.substring(0, n + 1));
      p = n + 1;
    } else {
      res.push(s.substring(0, n));
      res.push(c);
    }
    for (;;) {
      const n = s.indexOf("&", p);
      if (n < 0) {
        res.push(s.substring(p));
        break;
      }
      const m = s.indexOf(";", n + 1);
      if (m < 0) {
        res.push(s.substring(p));
        break;
      }
      const sp = s.substring(n + 1, m);
      const c = spchars[sp];
      if (!c) {
        console.log("unsupported special char", sp);
        res.push(s.substring(p, n + 1));
        p = n + 1;
      } else {
        res.push(s.substring(p, n));
        res.push(c);
        p = m + 1;
      }
    }
    return res.join("");
  },
  encode(s) {
    return s.replace(/&/g, "&amp;");
  },
  getSpecialChars() {
    return spchars;
  }
};
