# Namaste-React

## carot ^ (minor version upgrade) and tilde ~ (major version upgrade)

## **<u>Why do we need package-lock.json?</u>**
It keeps track of the exact version of the dependency and creates a hash becoz you might have heard that developers saying the code works fine in local but doesnt work in production its bcz of version missmatch.

## **<u>Transitive dependencies</u>**
 You might have seen that when you install a dependency apart from that there are many files downloaded wit it, this is called Transitive dependency. Eg: If parcel is a dependecy for project and when installed other files are also installed bcz it has its own dependency.

### JSX is nothing but HTML like syntax to write inside JavaScript.

- Babel converts the JSX to --> React.createElement - (JS - object) --> HTML Element
- Attributes should be in camelCase

## <u>React Components</u>
- Class based components
- Functional based component --> A function that returns some JSX / React Element is known as functional component.

### Component Composition
Adding two or more components into one another is known as component composition.

## System Design Interviews
Config driven UI --> Means our UI/website is driven by a config file, where UI changes dynamically with data.

### whenever a state variable changes React re-renders the component.

## Virtual DOM
It is the representation of an Actual DOM

## Diffing Algorithm
Finds out the difference between 2 different VDOMs

## Reconciliation Algorithm / React Fiber
Compares React objects OLD vs NEW and updates the DOM

## Why React is fast 
Because React is doing efficient DOM manipulation how? because it uses VDOM (Object representation of HTML). React can efficiently find out the difference between VDOMs and update the UI.

## What is Hooks
Its nothing but a javascript function provided by React based on the usecase.

## When is useEffect() is called
It is instantly called after the component is loaded/rendered on to the page.

## CORS Policy
Accessing the swiggy API from localhost is blocked by CORS policy. 
Who is blocking?
Browsers are blocking us to call API from One origin to another Origin is called CORS policy.

## Shimmer UI
It resembles the actual UI so users will understand how quickly our web app or mobile app load even before the content has shown up.

## cont [btn, setBtn] = useState(); Its a const variable so how its changing?
const [btn, setBtn] = useState(); 

This line does destructuring. Behind the scenes, it’s like:

const stateArray = useState();
const btn = stateArray[0];      // current value of the state
const setBtn = stateArray[1];   // function to update the state

React will re-run your component function whenever state changes, and it’ll assign a new value to btn on each render.
- btn is const → its reference won't change during a single render.
- But React re-executes the component function on re-render, so the btn in the next render can hold a different value.
- During re-render, btn now holds "new value" — but it’s still declared as const because it's a new render context
- btn is a const, but it changes because React re-runs the component function and gives btn the new value.
- setBtn is what triggers this re-render.