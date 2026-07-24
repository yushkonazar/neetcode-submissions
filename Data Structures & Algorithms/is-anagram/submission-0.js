class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if ([...s].sort().join('') === [...t].sort().join('')){
            return true
        }
        return false
    }
}
