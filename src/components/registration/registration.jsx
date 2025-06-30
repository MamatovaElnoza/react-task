import React, { Component } from 'react';
import './registration.css';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Foydalanuvchi:', this.state.username);
    console.log('Parol:', this.state.password);
  }

  render() {
    return (
      <div className="registration-container" ref={this.props.innerRef}>
        <form className='registration-form' onSubmit={this.handleSubmit}>
          <div style={{ textAlign: 'center', margin: '40px' }}>
            <h1 style={{color: '#3b82f6', fontSize: '50px', fontWeight: '700'}}>FARQI YO'Q .</h1>
            <h2 style={{fontSize: '40px', marginLeft: '120px', fontWeight: '600'}}>Registration</h2>
          </div>
          <div className='inputs-div'>
            <input className='input' type="text" name="username" placeholder="User Name" value={this.state.username} onChange={this.handleChange} />
            <input className='input' type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
            <button className='button-regstration' type="submit">Yuborish</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Registration;
