// Calculating Average
const avg = (arr: any) => {
    let sum = arr.reduce((a: number, b: number) => a + b);
    return sum / arr.length;
  };
  
  // Find Min Max Value
  const minmax = (arr: any) => {
    let sortArr = arr.sort((a: number, b: number) => a - b);
    return [sortArr[0], sortArr[sortArr.length - 1]];
  };
  
  const arr:number[] = [1, 3, 5, 7, 9, 1];
  console.log(avg(arr));
  console.log(minmax(arr));
  