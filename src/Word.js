// import React from "react";

// function Word(props) {
//     return (
//         <div>
//             <table>
//                 {/* <thead>
//                 <tr>
//                     <th>English</th>
//                     <th>Dutch</th>
//                 </tr>
//                 </thead> */}
//                 <tbody>
//                     <tr>
//                         {/* <td>{this.state.props.english}</td> */}
//                         <td>{this.state.props.english}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Word

// import React from 'react';
import React, {Component} from "react"


class Word extends Component {
  constructor() {
    super()
    this.state = {
      character: {}
    }
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/word/1/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          character: data
        })
      })
      .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <table>
            {/* <thead>
                <tr>
                    <th>{this.state.character.id}</th>
                </tr>
            </thead> */}
            <tbody>
                <tr>
                    <td>{this.state.character.id}</td>
                    <td>{this.state.character.dutch}</td>
                    <td>{this.state.character.english}</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default Word