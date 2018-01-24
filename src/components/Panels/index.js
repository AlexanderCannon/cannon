import React from 'react'
import Panel from '../Panel'
import './Panels.css'
const Panels = () => {
  return (
    <div className="panels">
      <Panel name='panel-a'>
        <p>Live</p>
        <p>Life</p>
        <p>Love</p>
      </Panel>
      <Panel name="panel-b">
        <p>War</p>
        <p>Is</p>
        <p>Peace</p>
      </Panel>
      <Panel name="panel-c">
        <p>Have</p>
        <p>A</p>
        <p>Nice day</p>
      </Panel>
      <Panel name="panel-d">
        <p>Exit</p>
        <p>Stage</p>
        <p>Right</p>
      </Panel>
    </div>)
}
export default Panels