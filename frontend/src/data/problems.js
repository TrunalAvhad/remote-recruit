export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
  javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
  python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
  java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
  c: `#include <stdio.h>

int* twoSum(int* nums, int numsSize, int target) {
    // Write your solution here
    static int result[2];
    return result;
}

int main() {
    int nums1[] = {2,7,11,15};
    twoSum(nums1, 4, 9); // Expected: [0, 1]

    int nums2[] = {3,2,4};
    twoSum(nums2, 3, 6); // Expected: [1, 2]

    int nums3[] = {3,3};
    twoSum(nums3, 2, 6); // Expected: [0, 1]

    return 0;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> a = {2,7,11,15};
    twoSum(a, 9); // Expected: [0, 1]

    vector<int> b = {3,2,4};
    twoSum(b, 6); // Expected: [1, 2]

    vector<int> c = {3,3};
    twoSum(c, 6); // Expected: [0, 1]
}`,
    },
    expectedOutput: {
  javascript: "[0,1]\n[1,2]\n[0,1]",
  python: "[0, 1]\n[1, 2]\n[0, 1]",
  java: "[0, 1]\n[1, 2]\n[0, 1]",
  c: "0 1\n1 2\n0 1",
  cpp: "0 1\n1 2\n0 1",
},

  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
  javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
  python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
  java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
  c: `#include <stdio.h>

void reverseString(char* s, int size) {
    // Write your solution here
}

int main() {
    char test1[] = {'h','e','l','l','o'};
    reverseString(test1, 5);        // Expected: [o, l, l, e, h]

    char test2[] = {'H','a','n','n','a','h'};
    reverseString(test2, 6);   // Expected: [h, a, n, n, a, H]

    return 0;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

void reverseString(vector<char>& s) {
    // Write your solution here
}

int main() {
    vector<char> test1 = {'h','e','l','l','o'};
    reverseString(test1);        // Expected: [o, l, l, e, h]


    vector<char> test2 = {'H','a','n','n','a','h'};
    reverseString(test2);   // Expected: [h, a, n, n, a, H]

}`,

    },
    expectedOutput: {
  javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
  python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
  java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
  c: "o l l e h\nh a n n a H",
  cpp: "o l l e h\nh a n n a H",
},

  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
  javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
  python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
  java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
  c: `#include <stdio.h>
#include <ctype.h>
#include <string.h>

int isPalindrome(char* s) {
    // Write your solution here
    return 1;
}

int main() {
    printf("%d\\n", isPalindrome("A man, a plan, a canal: Panama")); // Expected: 1
    printf("%d\\n", isPalindrome("race a car")); // Expected: 0
    printf("%d\\n", isPalindrome(" ")); // Expected: 1
    return 0;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

bool isPalindrome(string s) {
    // Write your solution here
    return true;
}

int main() {
    cout << isPalindrome("A man, a plan, a canal: Panama") << endl; // Expected: 1
    cout << isPalindrome("race a car") << endl; // Expected: 0
    cout << isPalindrome(" ") << endl; // Expected: 1
}`
    },
    expectedOutput: {
  javascript: "true\nfalse\ntrue",
  python: "True\nFalse\nTrue",
  java: "true\nfalse\ntrue",
  c: "1\n0\n1",
  cpp: "1\n0\n1",
},

  },

    "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day.",
      notes: [
        "You want to maximize your profit by choosing a single day to buy and a different day to sell.",
        "If you cannot achieve any profit, return 0."
      ],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6)."
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No transactions are done."
      }
    ],
    constraints: [
      "1 ≤ prices.length ≤ 10⁵",
      "0 ≤ prices[i] ≤ 10⁴"
    ],
    starterCode: {
  javascript: `function maxProfit(prices) {
  // Write your solution here
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,
  python: `def maxProfit(prices):
    # Write your solution here
    pass

print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))  # Expected: 0`,
  java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));
        System.out.println(maxProfit(new int[]{7,6,4,3,1}));
    }
}`,
  c: `#include <stdio.h>

int maxProfit(int* prices, int size) {
    // Write your solution here
    return 0;
}

int main() {
    int prices1[] = {7,1,5,3,6,4};
    printf("%d\\n", maxProfit(prices1, 6)); // Expected: 5

    int prices2[] = {7,6,4,3,1};
    printf("%d\\n", maxProfit(prices2, 5)); // Expected: 0

    return 0;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

int maxProfit(vector<int>& prices) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {7,1,5,3,6,4};
    cout << maxProfit(a) << endl; // Expected: 5

    vector<int> b = {7,6,4,3,1};
    cout << maxProfit(b) << endl; // Expected: 0
}
`
},

    expectedOutput: {
  javascript: "5\n0",
  python: "5\n0",
  java: "5\n0",
  c: "5\n0",
  cpp: "5\n0",
},

  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Set",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array.",
      notes: [
        "Return false if every element is distinct."
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
        explanation: "The element 1 appears twice."
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false"
      }
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁹ ≤ nums[i] ≤ 10⁹"
    ],
    starterCode: {
  javascript: `function containsDuplicate(nums) {
  // Write your solution here
}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false`,
  python: `def containsDuplicate(nums):
    # Write your solution here
    pass

print(containsDuplicate([1,2,3,1]))  # Expected: True
print(containsDuplicate([1,2,3,4]))  # Expected: False`,
  java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1})); // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4})); // Expected: false
    }
}`,
  c: `#include <stdio.h>

int containsDuplicate(int* nums, int size) {
    // Write your solution here
    return 0;
}

int main() {
    int a[] = {1,2,3,1};
    printf("%d\\n", containsDuplicate(a, 4)); // Expected: 1

    int b[] = {1,2,3,4};
    printf("%d\\n", containsDuplicate(b, 4)); // Expected: 0
    return 0;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    // Write your solution here
    return false;
}

int main() {
    vector<int> a = {1,2,3,1};
    cout << containsDuplicate(a) << endl; // Expected: 1

    vector<int> b = {1,2,3,4};
    cout << containsDuplicate(b) << endl; // Expected: 0
}
`
},

    expectedOutput: {
  javascript: "true\nfalse",
  python: "True\nFalse",
  java: "true\nfalse",
  c: "1\n0",
  cpp: "1\n0",
},

  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s.",
      notes: [
        "An anagram uses the same characters with the same frequency."
      ],
    },
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true"
      },
      {
        input: 's = "rat", t = "car"',
        output: "false"
      }
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 5 * 10⁴",
      "s and t consist of lowercase English letters"
    ],
    starterCode: {
  javascript: `function isAnagram(s, t) {
  // Write your solution here
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false`,
  python: `def isAnagram(s, t):
    # Write your solution here
    pass

print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))  # Expected: False`,
  java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram"));  // Expected: true
        System.out.println(isAnagram("rat", "car"));  // Expected: false
    }
}`,
  c: `#include <stdio.h>
#include <string.h>

int isAnagram(char* s, char* t) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\\n", isAnagram("anagram", "nagaram")); // Expected: 1
    printf("%d\\n", isAnagram("rat", "car")); // Expected: 0
    return 0;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

bool isAnagram(string s, string t) {
    // Write your solution here
    return false;
}

int main() {
    cout << isAnagram("anagram", "nagaram") << endl; // Expected: 1
    cout << isAnagram("rat", "car") << endl; // Expected: 0
}
`
},

    expectedOutput: {
  javascript: "true\nfalse",
  python: "True\nFalse",
  java: "true\nfalse",
  c: "1\n0",
  cpp: "1\n0",
},

  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
  javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
  python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
  java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
  c: `#include <stdio.h>

int maxSubArray(int* nums, int size) {
    // Write your solution here
    return 0;
}

int main() {
    int a[] = {-2,1,-3,4,-1,2,1,-5,4};
    printf("%d\\n", maxSubArray(a, 9)); // Expected: 6

    int b[] = {1};
    printf("%d\\n", maxSubArray(b, 1)); // Expected: 1

    int c[] = {5,4,-1,7,8};
    printf("%d\\n", maxSubArray(c, 5)); // Expected: 23

    return 0;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

int maxSubArray(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {-2,1,-3,4,-1,2,1,-5,4};
    cout << maxSubArray(a) << endl; // Expected: 6

    vector<int> b = {1};
    cout << maxSubArray(b) << endl; // Expected: 1

    vector<int> c = {5,4,-1,7,8};
    cout << maxSubArray(c) << endl; // Expected: 23
}
`
},

    expectedOutput: {
  javascript: "6\n1\n23",
  python: "6\n1\n23",
  java: "6\n1\n23",
  c: "6\n1\n23",
  cpp: "6\n1\n23",
},

  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
  javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
  python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
  java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
  c: `#include <stdio.h>

int maxArea(int* height, int size) {
    // Write your solution here
    return 0;
}

int main() {
    int a[] = {1,8,6,2,5,4,8,3,7};
    printf("%d\\n", maxArea(a, 9)); // Expected: 49

    int b[] = {1,1};
    printf("%d\\n", maxArea(b, 2)); // Expected: 1

    return 0;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

int maxArea(vector<int>& height) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {1,8,6,2,5,4,8,3,7};
    cout << maxArea(a) << endl; // Expected: 49

    vector<int> b = {1,1};
    cout << maxArea(b) << endl; // Expected: 1
}
`
},

    expectedOutput: {
  javascript: "49\n1",
  python: "49\n1",
  java: "49\n1",
  c: "49\n1",
  cpp: "49\n1",
},

  },

    "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [
        "The substring must be contiguous.",
        "Characters may repeat in the string."
      ],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.'
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.'
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation: 'The answer is "wke", with the length of 3.'
      }
    ],
    constraints: [
      "0 ≤ s.length ≤ 5 * 10⁴",
      "s consists of English letters, digits, symbols and spaces"
    ],
    starterCode: {
  javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
  python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))  # Expected: 3`,
  java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`,
  c: `#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char* s) {
    // Write your solution here
    return 0;
}

int main() {
    printf("%d\\n", lengthOfLongestSubstring("abcabcbb")); // Expected: 3
    printf("%d\\n", lengthOfLongestSubstring("bbbbb")); // Expected: 1
    printf("%d\\n", lengthOfLongestSubstring("pwwkew")); // Expected: 3
    return 0;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

int lengthOfLongestSubstring(string s) {
    // Write your solution here
    return 0;
}

int main() {
    cout << lengthOfLongestSubstring("abcabcbb") << endl; // Expected: 3
    cout << lengthOfLongestSubstring("bbbbb") << endl; // Expected: 1
    cout << lengthOfLongestSubstring("pwwkew") << endl; // Expected: 3
}
`
},

    expectedOutput: {
  javascript: "3\n1\n3",
  python: "3\n1\n3",
  java: "3\n1\n3",
  c: "3\n1\n3",
  cpp: "3\n1\n3",
},

  },

    "group-anagrams": {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "Array • Hash Table • String",
    description: {
      text: "Given an array of strings strs, group the anagrams together.",
      notes: [
        "An Anagram is a word formed by rearranging the letters of a different word."
      ],
    },
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["eat","tea","ate"],["tan","nat"],["bat"]]'
      },
      {
        input: 'strs = [""]',
        output: '[[""]]'
      },
      {
        input: 'strs = ["a"]',
        output: '[["a"]]'
      }
    ],
    constraints: [
      "1 ≤ strs.length ≤ 10⁴",
      "0 ≤ strs[i].length ≤ 100",
      "strs[i] consists of lowercase English letters"
    ],
    starterCode: {
  javascript: `function groupAnagrams(strs) {
  // Write your solution here
}

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));`,
  python: `def groupAnagrams(strs):
    # Write your solution here
    pass

print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(groupAnagrams([""]))
print(groupAnagrams(["a"]))`,
  java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        System.out.println(groupAnagrams(new String[]{""}));
        System.out.println(groupAnagrams(new String[]{"a"}));
    }
}`,
  c: `#include <stdio.h>

// NOTE:
// C does not have built-in dynamic string lists.
// Candidate should return grouped anagrams using custom structs.

void groupAnagrams(char** strs, int strsSize) {
    // Write your solution here
}

int main() {
    // Output representation is implementation-specific
    // Expected groups printed conceptually
    printf("[[...],[...],[...]]\\n");
    printf("[[...]]\\n");
    printf("[[...]]\\n");
    return 0;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

vector<vector<string>> groupAnagrams(vector<string>& strs) {
    // Write your solution here
    return {};
}

int main() {
    vector<string> a = {"eat","tea","tan","ate","nat","bat"};
    vector<string> b = {""};
    vector<string> c = {"a"};

    cout << "[[...],[...],[...]]" << endl;
    cout << "[[...]]" << endl;
    cout << "[[...]]" << endl;
}
`
},

    expectedOutput: {
  javascript: '[[...],[...],[...]]',
  python: '[[...],[...],[...]]',
  java: '[[...],[...],[...]]',
  c: '[[...],[...],[...]]',
  cpp: '[[...],[...],[...]]'
}

  },

    "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists",
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    category: "Linked List • Divide and Conquer • Heap",
    description: {
      text: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.",
      notes: [
        "Merge all the linked-lists into one sorted linked-list and return it."
      ],
    },
    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
        explanation: "The merged list is sorted in ascending order."
      },
      {
        input: "lists = []",
        output: "[]"
      }
    ],
    constraints: [
      "k == lists.length",
      "0 ≤ k ≤ 10⁴",
      "0 ≤ lists[i].length ≤ 500",
      "-10⁴ ≤ lists[i][j] ≤ 10⁴"
    ],
    starterCode: {
  javascript: `function mergeKLists(lists) {
  // Write your solution here
}

// Test cases
console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]])); // Expected: [1,1,2,3,4,4,5,6]
console.log(mergeKLists([])); // Expected: []`,
  python: `def mergeKLists(lists):
    # Write your solution here
    pass

print(mergeKLists([[1,4,5],[1,3,4],[2,6]]))
print(mergeKLists([]))`,
  java: `class Solution {
    public static int[] mergeKLists(int[][] lists) {
        // Write your solution here
        return new int[]{};
    }

    public static void main(String[] args) {
        System.out.println(java.util.Arrays.toString(
            mergeKLists(new int[][]{{1,4,5},{1,3,4},{2,6}})
        ));
        System.out.println(java.util.Arrays.toString(
            mergeKLists(new int[][]{})
        ));
    }
}`,
  c: `#include <stdio.h>

// NOTE:
// In C, linked lists must be implemented manually using structs.
// Candidate is expected to merge k sorted linked lists.

void mergeKLists(int** lists, int listsSize) {
    // Write your solution here
}

int main() {
    // Conceptual output
    printf("[1,1,2,3,4,4,5,6]\\n");
    printf("[]\\n");
    return 0;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

// NOTE:
// In real interviews, ListNode* is used.
// Here we keep output conceptual.

vector<int> mergeKLists(vector<vector<int>>& lists) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<int>> a = {{1,4,5},{1,3,4},{2,6}};
    vector<vector<int>> b = {};

    cout << "[1,1,2,3,4,4,5,6]" << endl;
    cout << "[]" << endl;
}
`
},

    expectedOutput: {
  javascript: "[1,1,2,3,4,4,5,6]\n[]",
  python: "[1,1,2,3,4,4,5,6]\n[]",
  java: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]",
  c: "[1,1,2,3,4,4,5,6]\n[]",
  cpp: "[1,1,2,3,4,4,5,6]\n[]"
}

  },

  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Array • Binary Search",
    description: {
      text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      notes: [
        "The overall run time complexity should be O(log (m+n))."
      ],
    },
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.0"
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.5"
      }
    ],
    constraints: [
      "0 ≤ nums1.length ≤ 1000",
      "0 ≤ nums2.length ≤ 1000",
      "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶"
    ],
    starterCode: {
  javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here
}

// Test cases
console.log(findMedianSortedArrays([1,3],[2])); // Expected: 2.0
console.log(findMedianSortedArrays([1,2],[3,4])); // Expected: 2.5`,
  python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass

print(findMedianSortedArrays([1,3],[2]))
print(findMedianSortedArrays([1,2],[3,4]))`,
  java: `class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        return 0.0;
    }

    public static void main(String[] args) {
        System.out.println(findMedianSortedArrays(new int[]{1,3}, new int[]{2}));
        System.out.println(findMedianSortedArrays(new int[]{1,2}, new int[]{3,4}));
    }
}`,
  c: `#include <stdio.h>

// NOTE:
// In C, binary search must be implemented manually.
// Candidate is expected to solve in O(log(m+n)).

double findMedianSortedArrays(int* nums1, int n1, int* nums2, int n2) {
    // Write your solution here
    return 0.0;
}

int main() {
    printf("2.0\\n");
    printf("2.5\\n");
    return 0;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

// NOTE:
// Optimal solution uses binary search on smaller array.

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    // Write your solution here
    return 0.0;
}

int main() {
    vector<int> a = {1,3};
    vector<int> b = {2};
    vector<int> c = {1,2};
    vector<int> d = {3,4};

    cout << "2.0" << endl;
    cout << "2.5" << endl;
}
`
},
    expectedOutput: {
  javascript: "2\n2.5",
  python: "2\n2.5",
  java: "2.0\n2.5",
  c: "2.0\n2.5",
  cpp: "2.0\n2.5"
}

  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers • Stack",
    description: {
      text: "Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.",
      notes: [
        "Each bar has width 1."
      ],
    },
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6"
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9"
      }
    ],
    constraints: [
      "n == height.length",
      "1 ≤ n ≤ 2 * 10⁴",
      "0 ≤ height[i] ≤ 10⁵"
    ],
    starterCode: {
  javascript: `function trap(height) {
  // Write your solution here
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5])); // Expected: 9`,
  python: `def trap(height):
    # Write your solution here
    pass

print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
print(trap([4,2,0,3,2,5]))`,
  java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1}));
        System.out.println(trap(new int[]{4,2,0,3,2,5}));
    }
}`,
  c: `#include <stdio.h>

// NOTE:
// Typical solutions use Two Pointers, Stack, or Prefix Max arrays.

int trap(int* height, int n) {
    // Write your solution here
    return 0;
}

int main() {
    printf("6\\n");
    printf("9\\n");
    return 0;
}`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

// NOTE:
// Optimal solution uses Two Pointers in O(n) time and O(1) space.

int trap(vector<int>& height) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {0,1,0,2,1,0,1,3,2,1,2,1};
    vector<int> b = {4,2,0,3,2,5};

    cout << "6" << endl;
    cout << "9" << endl;
}
`
},
    expectedOutput: {
  javascript: "6\n9",
  python: "6\n9",
  java: "6\n9",
  c: "6\n9",
  cpp: "6\n9"
}

  },

};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  c: {
    name:"c",
    icon: "/c.png",
    monacoLang: "c",
  },
   cpp: {
    name:"c++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
};