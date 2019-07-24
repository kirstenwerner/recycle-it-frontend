import React, { Component } from 'react'
import { connect } from 'react-redux';
// import {fetchRecycleCenters} from '../actions/recycleCentersActions'
import RecycleCentersList from '../components/recycleCenters/RecycleCentersList'

class RecycleCentersContainer extends Component {

   render() {
      return (
         <div>
            <RecycleCentersList recycleCenters={this.props.recycleCenters} />
         </div>
      )
   }
}


const mapStateToProps = state => {
   return {recycleCenters: state.recycleCenters.recycleCenters}
}

RecycleCentersContainer.defaultProps = {
  recycleCenters: []
}

export default connect(mapStateToProps)(RecycleCentersContainer)
