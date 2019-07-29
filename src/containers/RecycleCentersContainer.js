import React, { Component } from 'react'
import { connect } from 'react-redux';
import RecycleCentersMapContainer from './RecycleCentersMapContainer'

class RecycleCentersContainer extends Component {

   render() {
      return (
         <div>
            <RecycleCentersMapContainer recycleCenters={this.props.recycleCenters}/>
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
