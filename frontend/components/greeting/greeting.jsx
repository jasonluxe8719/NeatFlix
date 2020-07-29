import React from 'react';
import { Link, Redirect } from 'react-router-dom';

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
            <Link to="/">
              <img className="nf-logo" src={window.logoURL} />
            </Link>
            <div className="nav-links">
              <a className="linkedin" href="https://linkedin.com/in/jasonpark0119">LinkedIn</a>
              <a className="github" href="https://github.com/jasonluxe8719/NeatFlix">GitHub</a>
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
            <p className="center-text-small">
              Watch anywhere. Cancel anytime.
            </p>
          </section>
          <button className="demo-login" onClick={this.handleDemoUserLogin}>
            Try Neatflix as Demo User now!
          </button>
        </main>
      </div>
    )
  }


  render() {
    return(
      <div>
        {this.props.currentUser ? <Redirect to="/browse" /> : this.sessionLinks()}
      </div>
    )
  }
}

export default Greeting;