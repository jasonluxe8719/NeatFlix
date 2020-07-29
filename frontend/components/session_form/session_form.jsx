import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  update(field) {
    return e => this.setState({[field]: e.currentTarget.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  
  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  
  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div className="session-form-container">
        <nav className="browse-nav-container">
          <Link to="/">
            <img className="nf-logo" src={window.logoURL} />
          </Link>
        </nav>
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <p className="form-type">
            {this.props.formType === "Sign In" ? "Sign In" : "Sign Up"}
          </p>
          <div className="session-form"> 
            <br/>
            <input type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update('email')}
              className="session-input-email"
            />
            <br/>
            <input type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
              className="session-input-password"
            />
            <br/>
            <input type="submit" 
            value={this.props.formType}
            className="session-submit"
            />
          
          </div>
            <p className="underline">
              {this.props.formType === "Sign In" ? <Link to="/signup">Sign Up</Link>: <Link to="/login">Sign In</Link>}
            </p>
          <span className="error-message">{this.renderErrors()}</span>
        </form>
      </div>
    )
  }

};

export default SessionForm;