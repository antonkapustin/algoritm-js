let obj = {
  a: 1,
  b: {
    a: {
      a: 2,
      b: [1, 3],
      c: {
        a: -1,
      },
    },
  },
  c: 0,
  d: {
    a: {
      c: 1,
      e: [{ a: 1, b: 2 }, { a: 2 }],
    },
  },
};

function tree(obj) {
  let arr = [];
  let keys = Object.keys(obj);
  let o = [];

  for (let i = 0; i < keys.length; i++) {
    let key = Object.keys(obj[keys[i]]);

    if (key.length > 0) {
      o.push(obj[keys[i]]);
    } else {
      arr.push(obj[keys[i]]);
    }
  }

  o.forEach((el) => {
    arr = [...arr, ...tree(el)];
  });

  return arr;
}

let arr = tree(obj);

let sum = arr.reduce((sum, cur) => {
  return (sum = sum + cur);
});

console.log(sum, arr);
