function forLoop(array) {
   for (let i = 0; i < 25; i++) {
     if (i === 1) {
       ${i}
       array.push(`I am 1 strange loop.`)
       return array
     } else {
       array.push(`I am ${i} strange loops.`)
       return array
     }
  }
