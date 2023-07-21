const makeList = (arr, student) => {
    for (let i of arr) {
      if (i === student) {
        return subjects;
      }
    }
    return [];
  };