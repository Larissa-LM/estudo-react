import React, {Component} from "react"
import Table from './Table'

class App extends Component{
    render() {
      const characters = [
        {
          name: 'João',
          job: 'Barbeiro'
        },
        {
          name: 'Luis',
          job: 'Designer'
        },
        {
          name: 'Lis ',
          job: 'Cantora'
        },
      ]
      return(
        <div className="container">
          <Table characterData = {charatcters}/>
        </div>
      )
    }
  }

export default App 
  