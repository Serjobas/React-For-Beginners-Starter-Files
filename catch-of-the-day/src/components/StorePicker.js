import React from 'react';
import { getFunName } from '../helpers'


class StorePicker extends React.Component {
  constructor(props){
    super(props);

    this.state = {storeName : getFunName()};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.storeName);
  }
  handleChange(event){
    this.setState({storeName: event.target.value});
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="store-selector">
          <h2>Please Enter a Store</h2>
          <input onChange={this.handleChange} type="text" required placeholder="Store Name" value={this.state.storeName} />
          <button type="submit">Visit Store</button>
        </form>
    </div>
    )
  }
}

export default StorePicker;
