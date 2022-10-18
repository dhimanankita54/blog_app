import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { MdShare } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const GridView = () => {
    return (
        <>
            <div className='grid-container'>
                <Grid className='grid-container' container spacing={0} columns={18}>
                    <Grid className='grid1' item xs={18} md={6} display='flex' justifyContent='center' alignItems='center'>
                        <Link to='/blog_detail'><div>
                            <Typography variant='subtitle1' style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '20px'
                            }}>
                                Lorem ipsum dolor sit
                            </Typography>
                            <Typography variant='body1' style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '12px'
                            }}>
                                Lorem ipsum dolor sit
                            </Typography>
                            <Button style={{ color: 'white', fontWeight: 'bold' }}>
                                View Post &nbsp;  
                                <BsFillArrowRightCircleFill />
                            </Button>
                        </div></Link>
                    </Grid>
                    <Grid className='grid2' item xs={18} md={6} display='flex' justifyContent='center' alignItems='center'>
                        <Link to='/blog_detail'><div>
                            <Typography variant='subtitle1' style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '20px'
                            }}>
                                Lorem ipsum dolor sit
                            </Typography>
                            <Typography variant='body1' style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '12px'
                            }}>
                                Lorem ipsum dolor sit
                            </Typography>
                            <Button style={{ color: 'white', fontWeight: 'bold' }}>
                                View Post
                                <BsFillArrowRightCircleFill />
                            </Button>
                        </div></Link>
                    </Grid>
                    <Grid className='grid3' item xs={18} md={6} display='flex' justifyContent='center' alignItems='center'>
                        <Link to='/blog_detail'><div>
                            <Typography variant='subtitle1' style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '20px'
                            }}>
                                Lorem ipsum dolor sit
                            </Typography>
                            <Typography variant='body1' style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '12px'
                            }}>
                                Lorem ipsum dolor sit
                            </Typography>
                            <Button style={{ color: 'white', fontWeight: 'bold' }}>
                                View Post
                                <BsFillArrowRightCircleFill />
                            </Button>
                        </div></Link>
                    </Grid>
                </Grid>

            </div>

            <div className="grid-container2">
                <Grid container spacing={0}>
                    <Grid className='grid-text2' display='flex' justifyContent='center' alignItems="center" item xs={12} md={4}>
                        <Link to='/blog_detail'><div>
                            <Typography variant='body1' style={{ fontSize: '12px' }}>
                                AENEAN ELEIFEND, METUS VIDI
                            </Typography>
                            <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                                Tempus Vitae Quis Rutrum Vel Ut Eget Eu Pulvinar Blandit
                            </Typography>
                            <Typography variant='body1' style={{ fontSize: '12px' }}>
                                JOANNA WELLICK . JULY 13, 2018 . <MdShare /> 1K SHARES
                            </Typography>
                        </div></Link>
                    </Grid>
                    <Grid className='grid-img' item xs={12} md={8}>
                        <img src='https://theaffairtheme.com/the-affair/wp-content/uploads/sites/2/demo-image-00021-1280x840.jpg' />
                    </Grid>
                </Grid>
            </div>

            <div className="grid-container2">
                <Grid container spacing={0}>
                    <Grid item xs={12} md={4}>
                        <img className='grid-img3' src='https://theaffairtheme.com/the-affair/wp-content/uploads/sites/2/demo-image-00004-640x840.jpg' />
                    </Grid>
                    <Grid className='grid-text2' display='flex' justifyContent='center' alignItems="center" item xs={12} md={8}>
                        <div style={{ width: '50%' }}>
                            <Typography variant='body1' style={{ fontSize: '12px', margin: '10px 0' }}>
                                AENEAN ELEIFEND, RHONCUS
                            </Typography>
                            <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                                Massa Tincidunt Vel
                            </Typography>
                            <Typography variant='body1' style={{ fontSize: '12px', margin: '10px 0' }}>
                                JOANNA WELLICK . JULY 13, 2018 . <MdShare /> 1K SHARES
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className="grid-container2">
                <Grid container spacing={0}>
                    <Grid className='grid-text3' display='flex' justifyContent='center' alignItems="center" item xs={12} md={4}>
                        <div>
                            <Typography variant='body1' style={{ fontSize: '12px' }}>
                                AENEAN ELEIFEND, METUS VIDI
                            </Typography>
                            <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                                Rhoncus Ante Sit Nulla Sed Tellus Blandit Eleifend Nascetur
                            </Typography>
                            <Typography variant='body1' style={{ fontSize: '12px' }}>
                                JOANNA WELLICK . JULY 13, 2018 . <MdShare /> 1K SHARES
                            </Typography>
                        </div>
                    </Grid>
                    <Grid className='grid-img' item xs={12} md={8}>
                        <div style={{ height: '500px' }}>
                            <iframe
                                src='https://www.youtube.com/embed/B9ZdjDejk9g'
                                allow=" autoplay; encrypted-media;"
                                allowFullScreen
                                frameBorder='0'
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className='grid-foot'>
                <Grid container spacing={0} columns={18}>
                    <Grid item xs={9} md={3}>
                        <img className='foot-img' src='https://cloud.codesupply.co/instagram/image-1-large.jpg' />
                    </Grid>
                    <Grid item xs={9} md={3}>
                        <img className='foot-img' src='https://cloud.codesupply.co/instagram/image-2-large.jpg' />
                    </Grid>
                    <Grid item xs={9} md={3}>
                        <img className='foot-img' src='https://cloud.codesupply.co/instagram/image-3-medium.jpg' />
                    </Grid>
                    <Grid item xs={9} md={3}>
                        <img className='foot-img' src='https://cloud.codesupply.co/instagram/image-4-medium.jpg' />
                    </Grid>
                    <Grid item xs={9} md={3}>
                        <img className='foot-img' src='https://cloud.codesupply.co/instagram/image-5-medium.jpg' />
                    </Grid>
                    <Grid item xs={9} md={3}>
                        <img className='foot-img' src='https://cloud.codesupply.co/instagram/image-6-medium.jpg' />
                    </Grid>
                </Grid>

                <div className='footer'>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={16} md={8}>
                            <Typography variant='h5' style={{
                                fontSize: '20px',
                                fontWeight: 'bold',
                                marginTop: '10px'
                            }}>
                                The Affair
                            </Typography>
                            <Typography variant='body1' style={{
                                fontSize: '16px',
                                marginTop: '10px'
                            }}>
                                Designed and Developed
                            </Typography>
                        </Grid>
                        <Grid item xs={16} md={8} >
                            <MdFacebook className='social-icon' />
                            <BsTwitter className='social-icon' />
                            <BsInstagram className='social-icon' />
                            <BsPinterest className='social-icon' />
                            <BsYoutube className='social-icon' />
                        </Grid>
                    </Grid>
                </div>
            </div>


        </>
    )
}