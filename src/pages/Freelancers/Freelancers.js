import React from 'react'
import { Card ,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import axios from 'axios'

export const Freelancers = () => {

    const [freelancers, setFreelancers] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:8080/ws/user/findByRoleId')
            .then(res => {
                setFreelancers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])






    return (
        <div className="container">
            {sessionStorage.getItem("user") !== null &&
             <div className="text-center mt-5 mb-5 ">
                    <Button variant="primary" type="submit" as={Link} to="/addempleo" className="mr-5">
                        Add Job Posting
                    </Button>
                    <Button variant="primary" type="submit" as={Link} to="/edit">
                        Edit profile
                    </Button>
                    </div>
                    }
            <div className="row">
                {
                    freelancers.map((freelancer, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-2 mt-2">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630" />

                                <Card.Body>
                                    <Card.Title>{freelancer.fullName}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{freelancer.email}</Card.Subtitle>
                                    <Card.Text>
                                        {freelancer.userDescription}
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
