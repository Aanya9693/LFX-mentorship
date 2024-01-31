function processList(inputList) {
    // Check if the length of the input list is a multiple of 10
    if (inputList.length % 10 !== 0) {
      throw new Error("The length of the list must be a multiple of 10.");
    }
  
    // Remove items at positions that are multiples of 2 or 3
    const result = inputList.filter((_, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);
  
    return result;
  }
  
  export default processList;
  