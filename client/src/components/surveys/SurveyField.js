// SurveyField - contains logic for one field: one label and a text input
import React from 'react';


// class SurveyForm extends Component {

// 	render() {
// 		return(
// 			<div>
// 				SurveyForm!
// 				<form onSubmit={this.props.handleSubmit(values =>
// 					console.log("NewSurveyFormSubmit: ", values))}>

// 					<button type="submit">Submit</button>
// 				</form>
// 			</div>
// 		);
// 	}
// }

// extract { input } from props
export default ( { input, label } ) => {

	// {...input} equivalent to going through and mapping all the properties of props.input
	// e.g. onBlur={input.onBlur} onChange={input.onChange} etc.
	return(
		<div>
			<label>{ label }</label>
			<input {...input} />
		</div>
	);


};

