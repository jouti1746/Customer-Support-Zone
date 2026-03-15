1. What is JSX, and why is it used?

Answer: JSX (JavaScript XML) is a syntax extension for JavaScript used in React that lets you write HTML-like code inside JavaScript.
It is used to make UI code easier to read and write by describing components’ structure in a familiar markup style.

2. What is the difference between State and Props?
Answer: Props are read-only inputs passed from a parent component to a child, while State is internal data managed within a component that can change over time and trigger re-rendering in React.

3. What is the useState hook, and how does it work?
Answer: useState is a hook in React that lets functional components store and manage state.
It returns a state variable and a setter function, and calling the setter updates the state and re-renders the component.


4. How can you share state between components in React?
Answer: State can be shared by lifting the state up to a common parent component and passing it down to child components via props in React.

5. How is event handling done in React?
Answer: Event handling in React is done by passing event handler functions (e.g. onClick ) to JSX elements, which are triggered when the event occurs.
