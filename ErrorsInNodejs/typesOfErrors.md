| Error Type         | When it Happens                   |
| ------------------ | --------------------------------- |
| **SyntaxError**    | Wrong code syntax                 |
| **ReferenceError** | Using variable that doesn’t exist |
| **TypeError**      | Wrong type of value               |
| **RangeError**     | Invalid range (like array size)   |
| **URIError**       | Incorrect URI encoding            |
| **EvalError**      | `eval()` misuse (rare)            |


1. SyntaxError
console.log("Hello"

2. ReferenceError
console.log(a); // a not defined

3. TypeError
null.toString(); // TypeError

4. RangeError
new Array(-5); // negative array length
