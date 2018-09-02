import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';

const FIELDS = [
	{ label: 'Survey Title', name: 'title' },
	{ label: 'Subject Line', name: 'subject'},
	{ label: 'Email Body', name: 'body'},
	{ label: 'Recipient List', name: 'emails'}
];

class SurveyForm extends Component {


	renderFields() {
		// return (
		// 	<div>
		// 		<Field 
		// 			type="text"
		// 			name="surveyTitle"
		// 			component={ SurveyField }
		// 			label="Survey Title"
		// 		/>
		// 		<Field 
		// 			type="text"
		// 			name="surveySubject"
		// 			component={ SurveyField }
		// 			label="Subject Line"
		// 		/>
		// 		<Field 
		// 			type="text"
		// 			name="surveyEmailBody"
		// 			component={ SurveyField }
		// 			label="Email Body"
		// 		/>
		// 		<Field 
		// 			type="text"
		// 			name="surveyRecipientList"
		// 			component={ SurveyField }
		// 			label="Recipient List"
		// 		/>
		// 	</div>
		// );
		return(
			_.map(FIELDS, field => {
				return(
					<Field 
						type="text"
						component={ SurveyField }
						name={ field.name }
						label={ field.label }
						key={ field.name }
					/>	
				);
			})
		);
	}

	render() {
		return(
			<div>
				<form onSubmit={this.props.handleSubmit(values =>
					console.log("NewSurveyFormSubmit: ", values))}>
					{ this.renderFields() }
					<Link to="/surveys" className="red btn-flat left white-text">
						Cancel
					</Link>
					<button type="submit" className="teal btn-flat right white-text">
						Next
						<i className="material-icons right">arrow_forward</i>
					</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'surveyForm'
})(SurveyForm);

