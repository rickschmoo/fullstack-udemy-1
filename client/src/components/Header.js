import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './StripeWrapper';

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
				return [
					<li key="1"><Payments /></li>,
					<li key="2"><a href="/api/logout">Logout</a></li>
				];
		}
	}

	render() {
		console.log("HEADER RENDER PROPS: ", this.props);
		return (
			  <nav>
			    <div className="nav-wrapper">
			    	<Link
			      		to={ this.props.auth ? '/surveys': '/' }
			      		className="left brand-logo"
			      	>
			      		Emaily
			    	</Link>

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
