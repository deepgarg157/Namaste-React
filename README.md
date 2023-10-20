# Namaste React

React is a JavaScript library for building user interfaces.
React is used to build single-page applications.
React allows us to create reusable UI components.

# npm & npx
- npm - node package manager
- npx - node package excute

- npx create-react-app "file name"
- cd "file name"
- npm run start or npm start

- npm create vite@latest
- "project name"
- npm run dev - to run the file of vite + react

# router-dom
- npm i react-router-dom

# Redux
- npm i redux react-redux redux-thunk

# Core React
# JSX- JavaScript XML
- JSX stands for JavaScript XML.
  JSX allows us to write HTML in React.
  JSX makes it easier to write and add HTML in React.

  Two JSX in React
- React Element in JSX
- Components in JSX
- Class Based Components
- React Functional Components

# parcel
- Dev Build
- Loacl Server
- HMR- Hot Module Replacement
- File Watching Algorithm
- Caching- Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling
- Diagostic
- Error Handling
- HTTPs
- Tree Shaking
- Different dev and prod bundles

# App through React library
/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 * - RestaurantCard
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

 # Two types of export/import 

 - default export/import
 export default Components;
 import Components from "path";

 - Named export/import
 export const Components="";
 import {Components} from "path";

# React Hooks 
A hook is a normal java script function which react give to us it has its own specific usecase..
- normal JS utility function
- useState()
- useEffect()

- Note:- 1. useEffect should be called after the functional components..
         2. if no dependency is there => useEffect is called every time on at components render
         3. if dependency array is empty = [] => useEffect is called after the components is render (and useEffect is render once only).......
         4. if dependency array is [is something] => useEffect is render every time when the something file is updated everytime.......

- Note:- 1. dont use if, for loop, function conditon while use Hooks useState...
         2.      


# reconciliation algorithm ( React fiber )
- virtual DOM is the representation of Actual DOM..

# Monolith
load > api > render
load > render > API > render 

# Shimmer UI
- show demo UI through shimmer before load the api..

# Rounter React
- createBrowserRouter
- RouterProvider
- Outlet - is used for to make the children router 

# class based components 
- constructor
- render
- componetsDidMount
- componentsDidUpdate-
- componentsWillUnmount

# custom Hooks

<!-- Chunking
     code spliting
     dynamic bundling
     lazy loading -->

# lazy loading
- suspense in side the lazy
- fallback

# Sass

# react content

- useContext help to create anything to the parent form any functional components child

# redux store & zustand
- redux and react both are different library
- we use redux for state management

# Redux ToolKit
- npm i @reduxjs/toolkit and npm i react-redux
- Build our store
- connect our store to our app
- Slice (Cart slice)
- dispatch action
- Selector

# Testing our app (devloper)

- Unit Testing - npm install --save-dev @testing-library/react
- Integration Testing
- End to End Testing

# Setting up in our Testing App
- Install React Testing Library  -  npm install --save-dev @testing-library/react
- Install Jest  - npm i -D jest
- Install Babel dependencies  - npm install --save-dev babel-jest @babel/core @babel/preset-env
- install babel configuration
- configure parcel config file to disable default babel transpilation
- jest configuration - npx jest --init 
- Install jsdom - like a browser - npm install --save-dev jest-environment-jsdom