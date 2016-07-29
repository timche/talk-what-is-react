import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      data: [
        'John',
        'Dieter',
        'Paul'
      ]
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((name, i) => (
            <li
              key={i}
              onClick={() => this.setState({
                data: this.state.data.filter(n => n !== name)
              })}
            >
              {name}!
            </li>
          ))}
        </ul>
        <input
          value={this.state.value}
          onChange={event => this.setState({
            value: event.target.value
          })}
        />
        <button
          onClick={() => this.setState({
            data: this.state.data.concat(this.state.value),
            value: ''
          })}
        >
          Add
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
