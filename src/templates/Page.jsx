import Typography from '@mui/material/Typography';

export default function Page({ title, Component }) {
    return (
        <>
        <Typography variant='h3'>{title}</Typography>
        <Component />
        </>
    )
}