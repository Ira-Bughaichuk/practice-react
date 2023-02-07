import { logDOM } from "@testing-library/react";
import { Component } from "react";
import Select from "./components/Select/Select";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";
import { ModalDialog } from "react-bootstrap";

class App extends Component {
  state= {
    
    img: [],
    value: "1",
    url: "",
  }

  changeValue = (e) => {
    this.setState({
      value: e.target.value,
    })
    console.log(e.target.value)
    
  }
   fetchApi(){
     fetch(`https://dog.ceo/api/breeds/image/random/${this.state.value}`).then(r => r.json())
       .then(r => this.setState({
       img: r.message
     }))
     
     }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
     this.fetchApi()
    }
  
  }
  openModal = (src) => {
    this.setState({
      url: src
    })
  }
  closeModal = (e) => {
    this.setState({
      url: ""
    })
  }

  render() {
    return (
      <>
      < div >
        <Select changeValue={this.changeValue} /> 
          <List listImg={this.state.img} openModal={this.openModal}  />

      </div >
      <div>
         { this.state.url ? <Modal url = {this.state.url}  closeModal = {this.closeModal}  /> : null }
        </div>
        </>
    )
    
}
  

}

export default App