import React, { Component} from 'react';
import { connect } from 'react-redux';

class Header extends Component {


	renderContent() {
		switch (this.props.auth) {

			case null:
				// return 'Still deciding';
				return;

			case false:
				//return "I'm logged out";
				return <li><a href="/auth/google">Login with Google</a></li>;
			default:
				// return ("I'm logged in!: <"
				// 	+ this.props.auth.googleID + 
				// ">");
				return <li><a href="/api/logout">Logout</a></li>;
		}
	}

	render() {
		console.log("HEADER RENDER PROPS: ", this.props);
		return (
			  <nav>
			    <div className="nav-wrapper">
			      <a href="#" className="left brand-logo">Emaily</a>

			      	<ul id="nav-mobile" className="right hide-on-med-and-down">
			      		{this.renderContent()}
			      	</ul>
			    </div>
			  </nav>
		);
	}
}

// redux wiring
function mapStateToProps( { auth } ) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
