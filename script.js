function bitwiseAND(n1, n2) {
  return n1 & n2;
}

function bitwiseOR(n1, n2) {
  return n1 | n2;
}

function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}

function redundant(str) {
  return () => str;
}

function getNotesDistribution(students) {
  const validNotes = new Set([1, 2, 3, 4, 5]);

  return students
    .flatMap((student) => student.notes)
    .filter((note) => validNotes.has(note))
    .reduce((dist, note) => {
      dist[note] = (dist[note] || 0) + 1;
      return dist;
    }, {});
}

console.log("Level 1:");
console.log("bitwiseAND(7, 12) =>", bitwiseAND(7, 12));
console.log("bitwiseOR(7, 12)  =>", bitwiseOR(7, 12));
console.log("bitwiseXOR(7, 12) =>", bitwiseXOR(7, 12));

console.log("\nLevel 2:");
const f1 = redundant("apple");
const f2 = redundant("pear");
const f3 = redundant("");
console.log('f1() =>', JSON.stringify(f1()));
console.log('f2() =>', JSON.stringify(f2()));
console.log('f3() =>', JSON.stringify(f3()));

console.log("\nLevel 3:");
console.log(
  "getNotesDistribution =>",
  getNotesDistribution([
    { name: "Steve", notes: [5, 5, 3, -1, 6] },
    { name: "John", notes: [3, 2, 5, 0, -3] },
  ])
);
