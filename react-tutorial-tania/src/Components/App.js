import React, {Component} from "react"
import Table from './Table'

class App extends Component{
    state = {
      characters : [
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
    };

    removeCharacter = (index) => {
      const {characters} = this.state 

      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index
        }),
      })
    }

      render(){
        const {characters} = this.state
        return(
          <div className="container">
            <Table characterData = {characters} removeCharacter = {this.removeCharacter}/>
          </div>
        )
      }
  }

export default App 
  