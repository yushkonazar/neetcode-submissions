class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0; i < nums.length; i++){
            const num = target - nums[i];
            const ind = nums.indexOf(num, i + 1);
            if (ind !== -1) return [i, ind]
        }
        return -1;
    }
}
