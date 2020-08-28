import React, { Component } from 'react'

export class TriviaQueueCard extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>
                  {this.props.question.question}
                </h2>
                <h2>
                  {this.props.question.category}
                </h2>
                <h2>
                  {this.props.question.difficulty}
                </h2>
                <h2>
                  {this.props.question.category}
                </h2>
                
            </div>
        )
    }
}

export default TriviaQueueCard
