//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './Plan'
// function App() {
//   return (
//     <div className="App">
//       <h1>Plan!</h1>
//     </div>
//   );
// }
class App extends Component {
  state = {
    items: [],
    text: ""
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  handleAdd = e => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  }
  handleDelete = id => {
    console.log("Deleted", id);
    const oldItems = [...this.state.items]
    console.log("oldItems", oldItems);
    const items = oldItems.filter((element, i) => {
      return i !== id;
    })
    console.log("NewItems", items);
    this.setState({ items: items });
  }
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-10" >

            <h2 className="text-center"><u>To Do List For Plan</u></h2>
            <br></br>
            <div className='row'>
              <div className='col-9'>
                <span><b>  Title: </b></span>
                <input type="text" className="form-control" placeholder="what's Plan ?" value={this.state.text} onChange={this.handleChange}></input>
              </div>
              <div className='col-2'>
                <br></br>
                <button className='btn btn-success px-5' onClick={this.handleAdd}><b>Add</b></button>
              </div>
              <div className='conatiner-fluid'>
                <ul className="list-unstyled row m-5">
                  
                  {
                    this.state.items.map((value, i) => {
                      return <Plan key={i} id={i} value={value} sendData={this.handleDelete}></Plan>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
