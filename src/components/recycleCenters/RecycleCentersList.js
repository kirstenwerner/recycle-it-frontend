import React, { Component } from 'react'
import RecycleCenter from './RecycleCenter'

class RecycleCentersList extends Component {

  renderRecycleCenters = () => {
    if (!!this.props.recycleCenters.length > 0)
    return this.props.recycleCenters.map(center =>
      <RecycleCenter recycleCenter={center} key={center.id} />
    )
  }

  componentWillUpdate(nextProps, nextState) {
    document.querySelector('div.recycle-centers-list').innerHTML = ""
  }

  render () {
    return(
      <div className="recycle-centers-list">
        {this.renderRecycleCenters()}
      </div>
    )
  }
}

export default RecycleCentersList
