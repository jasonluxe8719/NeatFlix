import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    // this.sessionLinks = this.sessionLinks.bind(this);
    // this.logoutLink = this.logoutLink.bind(this);
    this.handleDemoUserLogin = this.handleDemoUserLogin.bind(this);
  }

  handleDemoUserLogin(event) {
    event.preventDefault();
    this.props.login(this.props.demoUser);
  }

  sessionLinks () {
    return(
      <div className="greeting-container">
        <header>
          <nav className="signin-signup">
            <p className="neatflix-logo">NEATFLIX</p>
            <div className="nav-links">
              <Link to="/login">
                <input className="signin-button"
                type="submit" value="Sign In"/>
              </Link>
              
              <Link to="/signup">
                <input className="signup-button"
                 type="submit" value="Sign Up!"/>
              </Link>
            </div>
          </nav>
        </header>
        <main className="center-content">
          <section className="center-text">
            Unlimited movies, TV <br/>
            shows, and more.
          </section>
          <button className="demo-login" onClick={this.handleDemoUserLogin}>
            Try Neatflix as Demo User now!
          </button>
        </main>
      </div>
    )
  }

  logoutLink () {
    return(
      <nav className="logout">
        <button className="logout-button" onClick={this.props.logout}>Sign Out</button>
      </nav>
    )
  }


  render() {
    return(
      <div>
        {this.props.currentUser ? this.logoutLink() : this.sessionLinks()}
      </div>
    )
  }
}

export default Greeting;