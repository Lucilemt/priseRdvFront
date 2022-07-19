import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email:'',
            rdv_date: '',
            rdv_heure: ''
        }
    }
    handleFirstnameChange = event =>{
        this.setState({
            firstname: event.target.value
        })
    }
    handleLastnameChange = event =>{
        this.setState({
            lastname: event.target.value
        })
    }
    handleEmailChange = event =>{
        this.setState({
            email: event.target.value
        })
    }
    handleRdvDateChange = event =>{
        this.setState({
            rdv_date: event.target.value
        })
    }
    handleRdvHeureChange = event =>{
        this.setState({
            rdv_heure: event.target.value
        })
    }
  render() {
    const{firstname, lastname, email, rdv_date, rdv_heure} = this.state;
    return (
      <div>
        <form action="http://localhost:5001/submit-rdv" method="post">
				<div>
					<label>Prénom </label>
					<input
						type="text"
						value={firstname}
                        onChange={this.handleFirstnameChange}
                        name="firstname"
					/>
				</div>
				<div>
					<label>Nom </label>
					<input
						type="text"
						value={lastname}
                        onChange={this.handleLastnameChange}
                        name="lastname"
					/>
				</div>
				<div>
					<label>Email </label>
					<input
						type="email"
						value={email}
                        onChange={this.handleEmailChange}
                        name="email"
					/>
				</div>
				<div>
					<label>Date RDV </label>
					<input
						type="date"
						value={rdv_date}
                        onChange={this.handleRdvDateChange}
                        name="rdv_date"
					/>
				</div>
				<div>
					<label>Heure RDV </label>
					<input
						type="time"
						value={rdv_heure}
                        onChange={this.handleRdvHeureChange}
                        name="rdv_heure"
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
      </div>
    )
  }
}

export default Form