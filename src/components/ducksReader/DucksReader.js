import React, { Component } from 'react'
import {gatherPoop} from '../../ducks/reducer'
import {connect} from 'react-redux'

class DucksReader extends Component {
    constructor(props){
        super(props)
        this.state={
            poopyState:"poop from State"
        }
    }

    changeHandler(val){
        this.props.gatherPoop(val)
    }

  render() {
    return (
      <div>
        <h1>{this.props.chickenGoMoo?this.props.chickenGoMoo:this.state.poopyState}</h1>
        <input onChange={(e)=>this.changeHandler(e.target.value)}/>
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
        chickenGoMoo:state.poop
    }
}

export default connect(mapStateToProps,{gatherPoop})(DucksReader)
