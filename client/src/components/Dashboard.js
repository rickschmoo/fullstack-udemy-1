import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div>
			New dashboard! 
			<div className="fixed-action-btn">
  				
  				<Link to="/surveys/new" className="btn-floating btn-large red">
    				<i className="large material-icons rick-accessible-focus-outline">assignment</i>
  				</Link>
			</div>
		</div>
	);
};

export default Dashboard;