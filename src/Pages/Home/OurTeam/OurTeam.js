import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container, Divider } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
const OurTeam = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch('https://guarded-savannah-01945.herokuapp.com/teams')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    return (
        <Container>
            <Typography sx={{ color: 'white', textAlign: 'center' }} variant="h3">
                Our Teams
            </Typography>
            <Box sx={{ flexGrow: 1, my: 8 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {teams.map(tm => <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{ borderRadius: '12px', background: '#001e3c' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="380"
                                image={tm.photo}
                            />
                            <Typography sx={{ position: 'relative', bottom: 27, mx: 4 }} >
                                <LocalPhoneIcon
                                    sx={{ background: '#ff4605', color: '#fff', fontSize: '50px', fontWeight: 'bold', borderRadius: '8px', padding: '5px', marginRight: '20px' }}
                                />
                                <EmailSharpIcon
                                    sx={{ background: '#ff4605', color: '#fff', fontSize: '50px', fontWeight: 'bold', borderRadius: '8px', padding: '5px' }}
                                />
                            </Typography>
                            <CardContent >
                                <Typography sx={{ fontWeight: 500, color: 'white' }} gutterBottom variant="h5" component="div">
                                    {tm.name}
                                </Typography>
                                <Typography sx={{ fontSize: '18px', fontWeight: 'medium', mb: 1, color: 'lightgray' }} >
                                    {tm.rank}
                                </Typography>
                                <Divider sx={{ color: 'white' }} />
                                <Typography sx={{ fontSize: '18px', fontWeight: 'regular', my: 1, color: '#ff4605' }}>
                                    {tm.email}
                                </Typography>
                                <Typography sx={{ fontSize: '18px', fontWeight: 'medium', mb: 1, color: 'lightgray' }}>
                                    {tm.phone}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>)}
                </Grid>
            </Box>
        </Container>
    );
};

export default OurTeam;