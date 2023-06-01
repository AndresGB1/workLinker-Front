import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import axios from 'axios'

export const Empleos = () => {


    const [empleos, setEmpleos] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:8080/ws/jobPosting/all')
            .then(res => {
                setEmpleos(res.data)    
            })
            .catch(err => {
                console.log(err)
            })
    }, [])






    return (
        <div className="container">{
            sessionStorage.getItem("user") !== null &&
            <div className="text-center mt-5 mb-5 ">
                    <Button variant="primary" type="submit" as={Link} to="/edit">
                        Edit profile
                    </Button>
                    </div>
}
            <div className="row">
                {
                    empleos.map((empleo, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-2 mt-2">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630" />

                                <Card.Body>
                                    <Card.Title>{empleo.jobTitle}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{empleo.salaryRange}</Card.Subtitle>
                                    <Card.Text>
                                        {empleo.jobDescription}
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>

                    ))
                }
            </div>
        </div>





    )
}
