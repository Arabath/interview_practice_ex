function sym(...args) {
    // Return the symmetric difference of 2 arrays
    const getDiff = (arr1, arr2) => {
      // Returns items in arr1 that don't exist in arr2
      function filterFunction(arr1, arr2) {
        return arr1.filter(item => arr2.indexOf(item) === -1);
      }
  
      // Run filter function on each array against the other
      return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
    };
  
    // Reduce all arguments getting the difference of them
    const summary = args.reduce(getDiff, []);
  
    // Run filter function to get the unique values
    const unique = summary.filter((elem, index, arr) => index === arr.indexOf(elem));
    return unique;
  }

  console.log(sym([1,2,3,4],[1,24,2,4,6,3]))