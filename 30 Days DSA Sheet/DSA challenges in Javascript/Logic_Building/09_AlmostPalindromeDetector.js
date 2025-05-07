function canBePalindrome(s) {
	let left = 0;
	let right = s.length - 1;

	while (left <  right) {
			if (s[left] === s[right]) {
					// if character match then move both pointers
					left++;
					right--;
			} else {
					// remove 1 char either left or right, if char do not match
					return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
			}
	}

	return true;
}

function isPalindrome(str, left, right) {
	while (left < right) {
			if (str[left] !== str[right])
			return false;
			left++;
			right--;
	}
	return true;
}

const s = "hello";
const result = canBePalindrome(s);

console.log(result ? "YES" : "NO");  //Output --> NO