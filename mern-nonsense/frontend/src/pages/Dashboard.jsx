import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GoalForm from '../components/GoalForm'
import { Paragraph } from '../style'

function Dashboard() {
    const navigate = useNavigate()

    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])


    return (
        <>
            <section className="heading">
                <h1>Welcome {user && user.name}</h1>
                <Paragraph>Goals Dashboard</Paragraph>
            </section>
            <GoalForm />
        </>
    )
}

export default Dashboard
