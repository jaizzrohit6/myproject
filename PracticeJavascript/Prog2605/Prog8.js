//Exercise 1 

function lengthOfLongestSubstring(str) {
  let longest = 0;
  let longestStr = "";
  let seen = {};
  let start = 0;
  let next = 0;

  while (next < str.length) {
    // Take current character from string
    let char = str[next];

    // If current character is already present in map
    if (seen[char]) {
      // Check if start index is greater than current character's last index
      start = Math.max(start, seen[char]);
    }

    // If new substring is longer than older
    if (longest < next - start + 1) {
      longest = next - start + 1;
      // Take slice of longer substring
      longestStr = str.slice(start, next + 1);
    }
    // Update current characters index
    seen[char] = next + 1;
    // Move to next character
    next++;
  }

  console.log(str, "->", longestStr, "->", longest);
  return longest;
}

lengthOfLongestSubstring("dvdfvev");
// lengthOfLongestSubstring("hello");
// lengthOfLongestSubstring("1212312344");
