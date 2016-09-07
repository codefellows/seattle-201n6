# Today's Plan: Class 10 Lecture

- [Code Review](#codereview) [Dan]
- [JS Debugging ](#debugging) [Dan]

## Readings

- JS book, Chapter 10: Error Handling & Debugging

[-top-](#top)

<a id="debugging"></a>
## JS Debugging

**JS book, Chapter 10: Error Handling & Debugging (pp.449-486)**

- You know the old saying to 'work smart instead of working hard'? This chapter is all about the 'working smart' part of things.

- We're only going to focus on the most important parts of this chapter, and cook it down to the most basic things that will help you to keep moving forward when you code.

- There are lots of debugging techniques outlined in this chapter, and you should take time to experiment with all of them to see which ones work best with your cognitive workflow.

- Ultimately, you'll develop a favorite set of tools and trick that mesh with your cognitive processes, or you might have to fall in line with the standard debugging practices of an employer. There are many possible ways to do things, and none are really more 'right' or 'wrong' than any other in concept, but only in application and workflow efficiency.

- General remark: error messages are only useful to you when you actually look into the console. If that's not a regular part of your workflow, make it one.

- It's important to learn how to treat error messages as valuable pieces of information, not just red garbage that appears in your console. Learning to decode error messages points you to not only where they are, but also the most likely part of that line to cause the problem. The more practice you get, the more you can rapidly interpret messages and debug effectively.

- p.452: Order of execution (declarations vs. calls)
- p.453: Execution contexts (context vs. scope)
- p.454: The Stack
- p.456: Hoisting
- p.457: More on scope
- p.458: Understanding errors
- p.459: Error Objects [IMPORTANT!]
  - Error (general)
  - SyntaxError
  - ReferenceError
  - TypeError
  - RangeError
  - URIError
  - EvalError
- p.463: Debugging workflow
- p.472: More console methods *(Aside: console messages can get clunky. You don't want to pollute production code with a lot of them, but they're very useful when constructing code. In particular, they provide a window into code that is executing in some local scope that cannot be inspected by hand in the globally-scoped console.)*
- p.472: Grouping messages
- p.475: console.assert()
- p.476: Breakpoints
- p.479: Debugger keyword
- p.480: Handling exceptions with `try`, `catch`, and `finally`
- p.484: Debugging tips [IMPORTANT!]
- p.485: Common errors [IMPORTANT!]

[-top-](#top)
