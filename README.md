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



