import React from 'react'
import ReactDom from 'react-dom'

function Practice(){
    return <h1>Hello World I am from React Functional Component</h1>
}
export default Practice

ReactDom.render(<Practice/>,document.getElementById('root'))

