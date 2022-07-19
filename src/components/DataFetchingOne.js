import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UserConsumer } from '../App'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:5001/user/62be9fd145cb502a9bebab2f`)
        .then(res =>{
            setLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch(error =>{
            setLoading(false) 
            setPost({})
            setError('Something went wrong')
            console.log(error)
        })
    },[])

    if(loading){return <h1>Loading...</h1>}

    return (
        <UserConsumer>
            {
                username => {return (
                    <div>
                    <h1>Hello {username}</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Email</th>
                                <th>Data RDV</th>
                                <th>Heure RDV</th>
                            </tr>
                        </thead>
                        <tbody>
                            {post.map((p,i)=>(
                                <tr key={i}>
                                    <td> {p.lastname} </td>
                                    <td> {p.firstname} </td>
                                    <td> {p.email} </td>
                                    <td>{p.rdv_date.toLocaleString('FR')}</td>
                                    <td>{p.rdv_heure} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {error ? 'error' : null}
                    </div>
                )}
            }
        </UserConsumer>
    )
}

export default DataFetchingOne