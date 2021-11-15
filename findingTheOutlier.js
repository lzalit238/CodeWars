function findOutlier(integers){
  if (integers  % 2 === 0) {
    console.log(integers);
  }
}

const findOutliers = [];
findOutliers.forEach(findOutlier);

//even odd filter
function findOutlier(integers) {
    var even = integers.filter(a => a % 2 === 0);
    var odd = integers.filter(a => a % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
}