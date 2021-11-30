import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createActionsPerson } from '../../redux/actions/person'
import { nanoid } from "nanoid"

class Person extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  toAddPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    this.props.createActionsPerson({
      id: nanoid(),
      name,
      age
    })
    this.nameNode.value = ""
    this.ageNode.value = ""
  }

  render() {
    return (
      <div>
        <h2>Person:   count的总和： { this.props.count }</h2>
        <input type="text" ref={ (c) => { this.nameNode = c } } />
        <input type="text" ref={ (c) => { this.ageNode = c } }/>
        <button onClick={this.toAddPerson}>添加</button>
        <ul>
          {
            this.props.personList.map((person, index) => {
              return (
                <li key={index}>{person.name} -- {person.age}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({ personList: state.person, count: state.count }),
  {
    createActionsPerson: createActionsPerson
  }
)(Person)


