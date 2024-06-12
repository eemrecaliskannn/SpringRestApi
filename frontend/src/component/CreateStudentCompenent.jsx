import React, { Component } from 'react';

class CreateStudentCompenent extends Component {
    constructor(proops){
        super(proops)

        this.state = {

            firstName:'',
            lastName:'',
            number:'',
            
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
        
    }

    saveStudent =(e) => {
        e.preventDefault();
        let student = {firstName: this.state.firstName, lastName: this.state.lastName, number: this.state.number};
        console.log('student => ' + JSON.stringify(student));
    }

    

    changeFirstNameHandler=(event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler=(event) => {
        this.setState({lastName: event.target.value});
    }
    changeNumberHandler=(event) => {
        this.setState({number: event.target.value});
    }
    cancel (){
        this.props.history.push("/students");
    }

    render() {
        return (
                <div>
                
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                               
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Number: </label>
                                            <input placeholder="Number" name="number" className="form-control" 
                                                value={this.state.number} onChange={this.changeNumberHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveStudent}> Save </button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancel </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}


export default CreateStudentCompenent