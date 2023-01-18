let s = "000000111111100000";
let cnt = 0;
let currChr = "*";
let f = 1;

for (let i = 0; i < s.length; i++) {
  if (s[i] === currChr) {
    cnt = cnt + 1;
  } else {
    cnt = 1;
    currChr = s[i];
  }

  if (cnt == 7) {
    console.log("YES");
    f = 0;
  }
}

if (f) console.log("NO");
