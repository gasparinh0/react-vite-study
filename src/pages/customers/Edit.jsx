import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { toastMessage } from '../../components/Toast';

import CircularProgress from '@mui/material/CircularProgress';

export default function EditCustomer() {
    const [form, setForm] = useState({
        name: {
            value: '',
            error: false
        },
        job: {
            value: '',
            error: false
        }
    })
    const [isLoading, setIsLoading] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
            .then(response => {
                const { data } = response.data

                setForm({
                    name: {
                        value: data.first_name,
                        error: false
                    },
                    job: {
                        value: data.job,
                        error: false
                    }
                })

            })
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }

    const handleRegisterButton = () => {
        setIsLoading(true)
        let hasError = false

        let newFormState = {
            ...form,
        }

        if (!form.name.value) {
            hasError = true
            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: "Digite o campo NOME corretamente"
            }
        }

        if (!form.job.value) {
            hasError = true
            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: "Digite o campo CARGO corretamente"
            }
        }

        if (hasError) {
            return setForm(newFormState)
        }

        axios.put(`https://reqres.in/api/users/${id}`, {
            name: form.name.value,
            job: form.job.value,
        }).then(() => {
            toastMessage("Pedido atualizado com sucesso", "bottom-left", 3000)
            setIsLoading(false)
        })
    }

    return (
        <>
            <Stack spacing={2} direction="column">
                <div>
                    <TextField label="Digite seu nome" name='name' value={form.name.value} onChange={handleInputChange} error={form.name.error} helperText={form.name.error ? form.name.helperText : ''}></TextField>
                </div>
                <div>
                    <TextField label="Digite seu Cargo" name='job' value={form.job.value} onChange={handleInputChange} error={form.job.error} helperText={form.job.error ? form.job.helperText : ''}></TextField>
                </div>
                <div>
                    <Button variant='contained' color='primary' onClick={handleRegisterButton} disabled={isLoading}>
                        {
                            isLoading ? <CircularProgress size='25px' color="secondary" /> : "Salvar alterações"
                        }
                    </Button>
                </div>
            </Stack>
        </>

    )
}