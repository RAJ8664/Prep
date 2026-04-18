<div align = "center">
<h style = "margin-bottom: 0px; margin-top: 0px; color : purple;" align = "center" class = "header">

## ⌨ 5. Longest Palindromic Substring

</h>
</div>

<h2><a href="https://leetcode.com/problems/longest-palindromic-substring" target = "_blank">5. Longest Palindromic Substring</a></h2><h3>Medium</h3><hr><p>Given a string <code>s</code>, return <em>the longest</em> <span data-keyword="palindromic-string"><em>palindromic</em></span> <span data-keyword="substring-nonempty"><em>substring</em></span> in <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;babad&quot;
<strong>Output:</strong> &quot;bab&quot;
<strong>Explanation:</strong> &quot;aba&quot; is also a valid answer.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;cbbd&quot;
<strong>Output:</strong> &quot;bb&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s</code> consist of only digits and English letters.</li>
</ul>

<CodeTabs :languages="[
  { name: 'C++', slot: 'cpp' },
  { name: 'Java', slot: 'java' },
  {name: 'Python', slot: 'py'}
]">

<template #java>

```java
import java.math.BigInteger;
import java.util.Random;

class Solution {
    public String longestPalindrome(String s) {
        int n = s.length();
        for (int i = n; i >= 1; i--) {
            String res = check(s, i);
            if (!res.equals(""))
                return res;
        }
        String res = "";
        res += s.charAt(0);
        return res;
    }
    private static String check(String s, int len) {
        int n = s.length();
        StringBuilder t = new StringBuilder(s);
        Hashing hash1 = new Hashing(s);
        Hashing hash2 = new Hashing(t.reverse().toString());
        for (int i = 0; i < n; i++) {
            if (i + len - 1 < n) {
                long Hash1 = hash1.getHashbounds(i, i + len / 2 - 1);
                long Hash2 = hash2.getHashbounds(n - (i + len), (n - (i + len) + len / 2 - 1));
                if (Hash1 == Hash2) {
                    StringBuilder res = new StringBuilder();
                    for (int j = i; j <= i + len - 1; j++)
                        res.append(s.charAt(j));
                    return res.toString();
                }
            }
        }
        return "";
    }
    static class Hashing {
        long[] hash1, hash2;
        long[] inv1, inv2;
        int n;
        static int muresiplier = 43;
        static final Random rnd = new Random();
        static final int mod1 = BigInteger.valueOf((int)(1e9 + rnd.nextInt((int) 1e9))).nextProbablePrime().intValue();
        static final int mod2 = BigInteger.valueOf((int)(1e9 + rnd.nextInt((int) 1e9))).nextProbablePrime().intValue();
        static final int invMuresiplier1 = BigInteger.valueOf(muresiplier).modInverse(BigInteger.valueOf(mod1)).intValue();
        static final int invMuresiplier2 = BigInteger.valueOf(muresiplier).modInverse(BigInteger.valueOf(mod2)).intValue();
        public Hashing(String s) {
            n = s.length();
            hash1 = new long[n + 1];
            hash2 = new long[n + 1];
            inv1 = new long[n + 1];
            inv2 = new long[n + 1];
            inv1[0] = 1;
            inv2[0] = 1;
            long p1 = 1;
            long p2 = 1;
            for (int i = 0; i < n; i++) {
                hash1[i + 1] = (hash1[i] + s.charAt(i) * p1) % mod1;
                p1 = p1 * muresiplier % mod1;
                inv1[i + 1] = inv1[i] * invMuresiplier1 % mod1;
                hash2[i + 1] = (hash2[i] + s.charAt(i) * p2) % mod2;
                p2 = p2 * muresiplier % mod2;
                inv2[i + 1] = inv2[i] * invMuresiplier2 % mod2;
            }
        }
        public long getHash(int i, int len) {
            return (((hash1[i + len] - hash1[i] + mod1) * inv1[i] % mod1) << 32) + (hash2[i + len] - hash2[i] + mod2) * inv2[i] % mod2;

        }
        public long getHashbounds(int x, int y) {
            return getHash(x, y - x + 1);
        }
    }
}
```

</template>

<template #cpp>

```cpp
class Solution {
public:
    string longestPalindrome(string s) {
        if (s.empty()) {
            return "";
        }

        int start = 0;
        int end = 0;

        for (int i = 0; i < s.length(); i++) {
            int odd = expandAroundCenter(s, i, i);
            int even = expandAroundCenter(s, i, i + 1);
            int max_len = max(odd, even);

            if (max_len > end - start) {
                start = i - (max_len - 1) / 2;
                end = i + max_len / 2;
            }
        }

        return s.substr(start, end - start + 1);
    }

private:
    int expandAroundCenter(string s, int left, int right) {
        while (left >= 0 && right < s.length() && s[left] == s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
};
```

</template>

<template #py>

```py
class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        res, maxi = "", 1
        for i in range(n):
            left, right = i, i
            while left - 1 >= 0 and right + 1 < n and s[left - 1] == s[right + 1]:
                left -= 1
                right += 1

            if right - left + 1 > maxi:
                maxi = right - left + 1
                res = s[left:right + 1]

            left, right = i, i + 1
            if right < n and s[left] == s[right]:
                if right - left + 1 > maxi:
                    maxi = right - left + 1
                    res = s[left:right + 1]

            temp = 0
            while right < n and s[left] == s[right] and left - 1 >= 0 and right + 1 < n and s[left - 1] == s[right + 1]:
                left -= 1
                right += 1
                temp = 1

            if temp == 1 and right - left + 1 > maxi:
                maxi = right - left + 1
                res = s[left: right + 1]

        if maxi == 1:
            return str(s[0])
        return res
```

</template>

</CodeTabs>
