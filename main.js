// GAME 1
// Let M be a not empty set of integer numbers, find the first subset of 2 numbers of M which sum N. For instance,
// let's say we've got a set of numbers [2, 5, 8, 14, 0] and N = 10, the resulting subset should be [2, 8].
// You're required to create a function that receives an array (M) and integer value (N). This function has to
// return an array of the first possible solution.

// SOLUTION
// --------------------------------------------------------------------------------

// TIME COMPLEXITY = O(nlog(n))
// SPCAE COMPLEXITY = 0(1)

const findTuple = (array, value) => {
  // Inicialization our variables
  const tupla = [];
  const indexArray1 = [...Array(array.length - 1).keys()];
  const indexArray2 = [...Array(array.length).keys()];
  indexArray2.shift();

  for (let i = 0; i < indexArray1.length; i++) {
    for (let j = 0; j < indexArray2.length; j++) {
      // PAIR OF CONBINATIONS OF INDEX UNTIL FIND THE TUPLA
      // console.log(indexArray1[i], indexArray2[j]);
      if (array[indexArray1[i]] + array[indexArray2[j]] === value) {
        tupla.push(array[indexArray1[i]]);
        tupla.push(array[indexArray2[j]]);
        return tupla;
      }
    }
    indexArray2.shift();
  }
};

// TEST
console.log(findTuple([2, 5, 67, 34, 19, 98, 100, 0, 34, 45, 45, 100], 134));
