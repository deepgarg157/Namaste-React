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

- Note:- useEffect should be called after the functional components..

# reconciliation algorithm ( React fiber )
- virtual DOM is the representation of Actual DOM..

# Monolith
load > api > render
load > render > API > render 

# Shimmer UI
- show demo UI through shimmer before load the api..
 