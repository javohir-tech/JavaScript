function moveZeroes(nums) {
	let result = []
	for (let i = 0; i < nums.length; i++) {
		if(nums[i]!==0){
			result.push(nums[i])
		}
	}
	for(let i=0;  i<nums.length; i++){
		if(nums[i]===0){
			result.push(nums[i])
		}
	}
	return result
}

const  nums = [0,1,0,3,12]
console.log(moveZeroes(nums))

module.exports = { moveZeroes }