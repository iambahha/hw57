import React from 'react';
import './ControlForm.css'
import {Button, Form} from "reactstrap";

const ControlForm = (props) => {
	return (
		<Form onSubmit={props.onSubmit}>
				<input type="text" className="Item-name" onChange={props.nameExpense} placeholder="Item name" />
				<input type="number" className="Item-cost" onChange={props.costExpense} placeholder="Cost" />
			<Button color="success">Add</Button>
		</Form>

	);
};

export default ControlForm;