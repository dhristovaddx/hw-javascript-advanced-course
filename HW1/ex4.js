let nums = [1, 2, 3, 4, 5];


Array.prototype.findMin = function (array) {
	return Math.min(...array);
};

Array.prototype.findMax = function (array) {
	return Math.max(...array);
};

console.log(`Min: ${nums.findMin(nums)} Max: ${nums.findMax(nums)}`);