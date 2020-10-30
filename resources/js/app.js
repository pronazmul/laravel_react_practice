import React from 'react'
import { Jumbotron} from 'react-bootstrap'
import ReactDom from 'react-dom'

function Practice() {
    return (
        <Jumbotron>
            <h1>Hello, world! I am from React Bootstrap</h1>
        </Jumbotron>
    )
}
export default Practice

ReactDom.render(<Practice />, document.getElementById('root'))

