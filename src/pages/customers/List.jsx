import { useState, useEffect } from 'react'
import axios from 'axios'

import Grid from '@mui/material/Grid2';

import CustomerCard from "../../components/CustomerCard"

const CustomersList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get("https://reqres.in/api/users")
            .then((response) => {
                const { data } = response.data
                setCustomers(data)
            })
    }, [])

    const handleRemoveCustomer = id => {
        axios.delete(`https://reqres.in/api/users/${id}`)
        .then(() => {
            const newCustomersState = customers.filter(customer => customer.id !== id)

            setCustomers(newCustomersState)
        })
    }

    return (
        <Grid container spacing={2}>
            {
                customers.map(item => (
                    <Grid size={{ xs: 12, md: 4 }}>
                        <CustomerCard
                            id={item.id}
                            name={item.first_name}
                            lastname={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                            onRemoveCustomer={handleRemoveCustomer}
                        />
                    </Grid>
                ))
            }
        </Grid>
    )
}

// GUIA DE TAMANHOS
// XS = EXTRA SMALL
// SM = SMALL 
// MD = MEDIUM 
// LG = LARGE 
// XL = EXTRA LARGE

export default CustomersList