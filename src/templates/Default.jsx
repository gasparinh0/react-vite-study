import Container from '@mui/material/Container';

import Header from "../partials/Header.jsx"
import useAuth from "../state/auth.jsx"

export default function Template({ children }) {
    const { user } = useAuth()

    return (
        <>
            <Header user={user}/>
            <Container sx = {{ padding: '15px 0' }}>
                {children}
            </Container>
        </>
    )
}