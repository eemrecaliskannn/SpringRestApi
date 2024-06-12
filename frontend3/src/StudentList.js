import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';





class StudentList extends Component {
    
    handleSearch = (event) => {
        event.preventDefault();
        const keyword = event.target.elements.keyword.value;
    
        // Perform the search logic using the 'keyword'
        const filteredStudents = this.state.students.filter(student =>
            student.name.toLowerCase().includes(keyword) ||
            student.surname.toLowerCase().includes(keyword) ||
            student.number.toString().includes(keyword)  // long u string e çeviriyor
            
            
            
        );
    
        // filtered students ı güncelliyor
        this.setState({ students: filteredStudents });
    };
    
    

    constructor(props) {
        super(props);
        this.state = {students: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/students')
            .then(response => response.json())
            .then(data => this.setState({students: data}));
    }
    //deleting students 
    async remove(id) {
        await fetch(`/students/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedStudents = [...this.state.students].filter(i => i.id !== id);
            this.setState({students: updatedStudents});
        });
    }
    
    render() {
        const {students, isLoading} = this.state;
    
        if (isLoading) {
            return <p>Loading...</p>;
        }
    
        const studentList = students.map(student => {
            return <tr key={student.id}>
                <td style={{whiteSpace: 'nowrap'}}>{student.name}</td>
                <td>{student.surname}</td>
                <td>{student.number}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/students/" + student.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(student.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });
    
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/students/new">Add Student</Button>
                        <form  action="/students" onSubmit={this.handleSearch}>
                            Filter: <input type="text" name='keyword' required />
                            &nbsp;
                            <input type='submit' value="Search" />
                            &nbsp;
                            <input type='button' value="Clear" />
                        </form>
                       
                    </div>
                    <h3>Students</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="30%">Surname</th>
                            <th width="30%">Number</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {studentList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}
export default StudentList;

