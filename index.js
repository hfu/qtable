const p = v => {
  for (let u of ['', 'K', 'M', 'G', 'T']) {
    if (v < 1024) return `${v}${u}`
    v /= 1024
  }
}

console.log('# qtable: a table for q (quantity level)')
console.log('|q|greater than or equal to|less than|')
console.log('| --- | --- | --- |')
console.log(`|-1|0|-|`)
for (let q = 0; q <= 45; q++) {
  console.log(`|${q}|${p(2 ** q)}|${p(2 ** (q + 1))}|`)
}
console.log('')
console.log('K, M, G, T is base-1024 here.')
