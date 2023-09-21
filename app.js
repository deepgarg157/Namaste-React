import React from "react";
import ReactDOM from "react-dom/client";

// // const heading= React.createElement('h1', {}, 'Hello World with React')
// // const root = ReactDOM.createRoot(document.getElementById('root'))
// // root.render(heading)

// // const parent=React.createElement('div', {id:'parent'},[
// // React.createElement('div', {id:'child'},
// // [React.createElement('h1', {}, 'I am Heading h1'), React.createElement('h2', {}, 'I am Heading h2')]
// // ),
// // React.createElement('div', {id:'child'},
// // [React.createElement('h1', {}, 'I am Heading h1'), React.createElement('h2', {}, 'I am Heading h2')]
// // )]
// // )

// // const root=ReactDOM.createRoot(document.getElementById('root'))

// // root.render(parent)


// // This is a core React
// // React.createElement => object => HTMLElement(render)

// // const heading=React.createElement('h1', {id : 'heading'}, 'Namaste React');

// // console.log(heading);



// // This is a JSX Syntax in react
// // JSX - HTML like or XML like JSX

// // React Element
// // const element = (
// //   <h1 className="greeting">
// //     Hello, world!
// //   </h1>
// // );

// // React Components
// // Class based Components
// // React Functional Components

// // React Functional Components

// // const HeadingComponent = ()=>{
// //   return <h1>Namaste React Functional Components</h1>;
// // }

const Element1 = () => <h1>Namaste React Functional components 1</h1>

const Element2 = <h1>Namaste React Element</h1>

const HeadingComponent2 = () => {
  return <div>
    {Element1()}
    <Element1 />
    <Element1></Element1>
    {Element2}
    <h1>Namaste React Functional Components</h1>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent2 />)


