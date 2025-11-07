import{_ as n,c as a,o as i,a6 as e}from"./chunks/framework.B-xGQOFu.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Leetcode/0177-nth-highest-salary/index.md","filePath":"Leetcode/0177-nth-highest-salary/index.md"}'),l={name:"Leetcode/0177-nth-highest-salary/index.md"};function p(t,s,r,h,E,o){return i(),a("div",null,[...s[0]||(s[0]=[e(`<h2><a href="https://leetcode.com/problems/nth-highest-salary">177. Nth Highest Salary</a></h2><h3>Medium</h3><hr><p>Table: <code>Employee</code></p><pre>+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| salary      | int  |
+-------------+------+
id is the primary key (column with unique values) for this table.
Each row of this table contains information about the salary of an employee.
</pre><p> </p><p>Write a solution to find the <code>n<sup>th</sup></code> highest salary from the <code>Employee</code> table. If there is no <code>n<sup>th</sup></code> highest salary, return <code>null</code>.</p><p>The result format is in the following example.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> 
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
n = 2
<strong>Output:</strong> 
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+
</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> 
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
+----+--------+
n = 2
<strong>Output:</strong> 
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| null                   |
+------------------------+
</pre><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CREATE FUNCTION </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getNthHighestSalary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (N INT) RETURNS INT BEGIN</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SET</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RETURN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SELECT DISTINCT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (salary)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  from</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Employee</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  order by</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    salary DESC</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  LIMIT</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  OFFSET</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    N</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">END</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,14)])])}const d=n(l,[["render",p]]);export{k as __pageData,d as default};
