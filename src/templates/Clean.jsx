import Container from '@mui/material/Container';

export default function Clean({ Component }) {
    return (
        <>
            <Container sx = {{ padding: '15px 0' }}>
                <Component />
            </Container>
        </>
    )
}