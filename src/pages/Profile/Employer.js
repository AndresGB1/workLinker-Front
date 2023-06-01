import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'


export const AddEmpleo = () => {
    
        const [jobTitle, setJobTitle] = useState('')
        const [salaryRange, setSalaryRange] = useState('')
        const [jobDescription, setJobDescription] = useState('')
        const [jobPostingDate, setJobPostingDate] = useState('')
        const [employerId, setEmployerId] = useState('')
    
        const handleSubmit = (e) => {
            e.preventDefault()
    
            const empleo = {
                jobTitle,
                salaryRange,
                jobDescription,
                jobPostingDate,
                employerId
            }
    
            axios.post('http://localhost:8080/ws/jobPosting/add', empleo)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    
        return (
            <div className="container">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Job Title" onChange={(e) => setJobTitle(e.target.value)} />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Salary Range</Form.Label>
                        <Form.Control type="text" placeholder="Enter Salary Range" onChange={(e) => setSalaryRange(e.target.value)} />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Job Description" onChange={(e) => setJobDescription(e.target.value)} />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Job Posting Date</Form.Label>
                        <Form.Control type="text" placeholder="Enter Job Posting Date" onChange={(e) => setJobPostingDate(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Employer ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Employer ID" onChange={(e) => setEmployerId(e.target.value)} />
                    </Form.Group>
    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }