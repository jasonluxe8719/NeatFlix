import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Email',
      password: 'Password'
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

  render() {
    return (
      <div className="session-form-container">
        <nav>
              <Link to="/">
                <h1 className="neatflix-logo">NEATFLIX</h1>
              </Link>
        </nav>
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <p className="form-type">{this.props.formType}</p>
          {this.renderErrors()}
          <div className="session-form"> 
            <br/>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="session-input-email"
            />
            <br/>
            <input type="password"
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
        </form>
      </div>
    )
  }

};

export default SessionForm;