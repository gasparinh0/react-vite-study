import Container from '@mui/material/Container';

import Header from "../partials/Header.jsx"

export default function Template({ children }) {
    return (
        <>
            <Header />
            <Container sx = {{ padding: '15px 0' }}>
                {children}
            </Container>
        </>
    )
}