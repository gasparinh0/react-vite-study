import { TextField, Button, Typography, Stack } from "@mui/material"
import { useState } from "react"
import useAuth from "../state/auth"
import { useNavigate } from "react-router";

export default function Login() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [isLoading, setIsLoading] = useState(false)

    const { user, setUser } = useAuth()

    let navigate = useNavigate();

    const handleInputChange = e => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleFormSubmit = () => {
        setIsLoading(true)

        setTimeout(() => {
            setUser({
                logged: true,
                email: form.email
            })

            navigate("/");
        }, 4000)
    }

    return (
        <>
            <Typography variant="h3">Acesso Restrito</Typography>

            <Stack spacing={2}>
                <TextField
                    onChange={handleInputChange}
                    label="Digite seu email"
                    name="email"
                />

                <TextField
                    onChange={handleInputChange}
                    label="Digite sua senha"
                    name="password"
                    type="password"
                />

                <Button variant="contained" color="primary " onClick={handleFormSubmit}>
                    {
                        isLoading ? 'Aguarde...' : 'Entrar'
                    }
                </Button>
            </Stack>

        </>
    );
}