class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const arr = new Map();

        for (const str of strs){
            const sortedKey = [...str].sort().join('');

            if (!arr.has(sortedKey)){
                arr.set(sortedKey, [])
            }

            arr.get(sortedKey).push(str);
        }
        return Array.from(arr.values())
    }
}
