import React, {Component} from 'react';
import {Container} from "reactstrap";
import ControlForm from "./components/AddForm/ControlForm";
import {Button} from "reactstrap";
import './App.css'

class App extends Component {

	state = {
		expenses: [],
		name: '',
		cost: 0,
		total: 0
	};

	addExpense = name => {
		name.preventDefault();
		if (this.state.name && this.state.cost) {
			const expenses = this.state.expenses;
			expenses.push({name: this.state.name, cost: this.state.cost, category: this.state.category});
			let total = this.state.total;
			total += this.state.cost;

			this.setState({expenses, total});
		}
	};

	removeExpense = name => {
		const expenses = this.state.expenses;
		let total = this.state.total;
		total -= expenses[name].cost;
		expenses.splice(name, 1);

		this.setState({expenses, total});
	};

	setExpenseNameHandler = name => this.setState({name: name.target.value});
	setExpenseCostHandler = name => this.setState({cost: parseInt(name.target.value)});

	render() {
		return (
			<Container>
				<ControlForm
					onSubmit={name => this.addExpense(name)}
					nameExpense={this.setExpenseNameHandler}
					costExpense={this.setExpenseCostHandler}
				/>
				<div className="Expenses">
					<h2>Expenses List:</h2>
					<ul>
						{this.state.expenses.map((item, name) => {
							return (
								<li key={name} className="item">
									<p className="itemName">{item.name}</p>
									<span><b className="itemCost">{item.cost} KGS</b><Button color="danger" className="btn-remove" onClick={() => this.removeExpense(name)}> Remove </Button></span>
								</li>
							);
						})}
					</ul>
					<p className="Total">Total spent: {this.state.total} KGS</p>
				</div>
			</Container>
		);
	}
}

export default App;