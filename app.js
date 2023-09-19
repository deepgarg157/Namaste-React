// const heading= React.createElement('h1', {}, 'Hello World with React')
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

const parent=React.createElement('div', {id:'parent'},[
React.createElement('div', {id:'child'},
[React.createElement('h1', {}, 'I am Heading h1'), React.createElement('h2', {}, 'I am Heading h2')]
),
React.createElement('div', {id:'child'},
[React.createElement('h1', {}, 'I am Heading h1'), React.createElement('h2', {}, 'I am Heading h2')]
)]
)

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)