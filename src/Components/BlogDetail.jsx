import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import '../styles/style.css';
import { BsBookmark } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const BlogDetail = () => {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid className='detail-sec1' display='flex' justifyContent='center' alignItems="center" item xs={12} md={4}>
                    <div>
                        <Typography variant='body1' style={{ fontSize: '12px' }}>
                            AENEAN ELEIFEND, METUS VIDI
                        </Typography>
                        <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                            Tempus Vitae Quis Rutrum Vel Ut Eget Eu Pulvinar Blandit
                        </Typography>
                        <Typography variant='body1' style={{ fontSize: '12px' }}>
                            JOANNA WELLICK . JULY 13, 2018
                        </Typography>
                    </div>
                </Grid>
                <Grid className='sec1-img' item xs={12} md={8}>
                    <img src='https://theaffairtheme.com/the-affair/wp-content/uploads/sites/2/demo-image-00013-1280x840.jpg' />
                </Grid>
            </Grid>

            <Grid container>
                <Grid xs={12} md={7} m='auto' p='30px'>
                    <div>
                        <Typography variant="body1" style={{ color: 'gray', textAlign: 'left' }}>
                            Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum.
                            Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet
                            luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.
                        </Typography>
                    </div>
                </Grid>
            </Grid>

            <Grid container>
                <Grid style={{
                    borderTop: '1px solid lightgrey',
                    borderBottom: '1px solid lightgrey',
                    textAlign: 'left'
                }}
                    xs={12} md={7} m='auto' p='30px'>
                    <div>
                        <Typography variant='h4' style={{ textAlign: 'left', fontSize: '25px' }}>
                            Table of Contents
                        </Typography>
                        <Typography
                            variant='body1'
                            component='a'
                            ml='100px'
                            style={{ textAlign: 'left' }}
                            href="#content1"
                        >
                            1. Nam condimentum varius justo
                        </Typography><br></br>
                        <Typography
                            variant='body1'
                            component='a'
                            ml='100px'
                            style={{ textAlign: 'left' }}
                            href="#content2"
                        >
                            2. Faucibus nullam luctus felis pretium donec
                        </Typography>
                    </div>
                </Grid>
            </Grid>

            <div id='content1'>
                <Grid container>
                    <Grid xs={12} md={7} m='auto' p='30px' style={{ textAlign: 'left' }}>
                        <Typography component='h2' variant='h4' style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            Nam condimentum varius justo
                        </Typography>
                        <Typography variant='body1' mt='20px' component='p' style={{ color: 'grey' }}>
                            Eget aenean tellus venenatis. Donec odio tempus.
                            Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero.
                            Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut.
                            Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.
                        </Typography>
                        <Typography variant='h5' mt='20px' p='30px 0' component='h5' style={{
                            borderTop: '1px solid lightgrey',
                            borderBottom: '1px solid lightgrey',
                            fontWeight: 'bold',
                            fontSize: '20px'
                        }}>
                            <BsBookmark style={{
                                margin: '0 20px 0px 20px',
                                color: 'grey',
                                fontSize: '25px'
                            }} />
                            Quis adipiscing ligula donec ullamcorper tellus.
                            Id odio vulputate aliquam nullam vitae tincidunt semper etiam quam donec quis.
                            <Typography m='10px 70px' sx={{ fontStyle: 'italic', fontSize: '12px', color: 'grey' }} variant='body1'>DONEC MASSA INTEGER</Typography>
                        </Typography>
                        <Typography variant='body1' p='20px 0' component='p' style={{ color: 'grey' }}>
                            Ut eu sem aenean imperdiet. Hendrerit penatibus <span style={{ fontWeight: 'bold' }}>sem adipiscing</span> aliquet consequat nec orci nascetur.
                        </Typography>
                        <Typography variant='body1' p='20px 0' style={{ color: 'grey' }}>
                            Etiam massa quam dolor aenean maecenas sociis tellus consectetuer.
                            In sit donec massa integer nisi mus viverra odio ultricies ridiculus.
                            Sapien sem lorem. Aenean sem venenatis arcu tellus fringilla vulputate quis vici nullam nec.
                            Cum quam veni lorem elit aliquet pede in enim.
                            Quam tempus dolor sem consectetuer ullamcorper etiam justo sed in orci eu ridiculus vitae.
                        </Typography>
                        <Typography
                            variant='body1'
                            ml='100px'
                            style={{ textAlign: 'left', color: 'grey' }}
                        >
                            1. Mollis lorem vitae varius.
                        </Typography>
                        <Typography
                            variant='body1'
                            ml='100px'
                            style={{ textAlign: 'left', color: 'grey' }}
                        >
                            2. Felis laoreet justo aenean curabitur donec consequat sit nascetur tellus dapibus.
                        </Typography>
                        <Typography
                            variant='body1'
                            ml='100px'
                            style={{ textAlign: 'left', color: 'grey' }}
                        >
                            3. Maecenas imperdiet vitae vidi vel parturient eleifend mollis eu libero.
                        </Typography>
                        <Typography
                            variant='body1'
                            ml='100px'
                            style={{ textAlign: 'left', color: 'grey' }}
                        >
                            4. Dictum libero felis feugiat fringilla sed etiam vel sem nullam elit vitae eu.
                        </Typography>
                        <Typography
                            variant='body1'
                            ml='100px'
                            style={{ textAlign: 'left', color: 'grey' }}
                        >
                            5. Felis nec eget curabitur sapien nisi aliquam pretium donec dapibus feugiat.
                            Faucibus enim venenatis mus semper.
                        </Typography>
                        <Typography variant='body1' p='20px 0' style={{ color: 'grey' }}>
                            Enim dapibus ante sapien eleifend dis vulputate quis viverra ultricies vitae eros.
                            Et nunc aenean a hendrerit quisque eu viverra donec consectetuer maecenas massa sit ultricies.
                            Tellus ante quis vici elementum etiam.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <div id='content2'>
                <Grid container>
                    <Grid xs={12} md={7} m='auto' p='30px' style={{ textAlign: 'left' }}>
                        <Typography component='h2' variant='h4' style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            Faucibus nullam luctus felis pretium donec
                        </Typography>
                        <Typography variant='body1' p='20px 0' component='p' style={{ color: 'grey' }}>
                            Amet tempus viverra ut libero nascetur id veni ridiculus rhoncus. Dis donec cras ultricies.
                            Eros vivamus enim nec nulla semper imperdiet aenean montes dictum porttitor metus.
                        </Typography>
                        <Typography variant='body1' p='20px 0' style={{ color: 'grey' }}>
                            Sit dis sed ante integer ullamcorper vel donec tellus a.
                            Nisi vici vulputate elit quis adipiscing aenean imperdiet justo varius. Vel eget luctus a sem pede sit metus nulla maecenas.
                            Etiam eleifend curabitur lorem. Viverra faucibus sem ultricies vitae etiam quam id feugiat in tellus vici ut.
                            Tellus quam varius commodo luctus aliquam nec amet nullam quis viverra sit fringilla consectetuer.
                        </Typography>
                        <Typography
                            variant='body1'
                            ml='100px'
                            style={{ textAlign: 'left', color: 'grey' }}
                        >
                            <BsCheck2 style={{ color: 'green' }} /> Ultricies sit semper leo dolor maecenas.
                        </Typography>
                        <Typography
                            variant='body1'
                            ml='100px'
                            style={{ textAlign: 'left', color: 'grey' }}
                        >
                            <BsCheck2 style={{ color: 'green' }} /> Magnis nam penatibus justo nec quis eget amet venenatis integer rutrum eleifend commodo tincidunt.
                        </Typography>
                        <Typography
                            variant='body1'
                            ml='100px'
                            style={{ textAlign: 'left', color: 'grey' }}
                        >
                            <BsCheck2 style={{ color: 'green' }} /> Aenean nunc pretium lorem ullamcorper leo.
                        </Typography>
                        <Typography
                            variant='body1'
                            ml='100px'
                            style={{ textAlign: 'left', color: 'grey' }}
                        >
                            <BsCheck2 style={{ color: 'green' }} /> Nec arcu ullamcorper lorem mus eu.
                        </Typography>
                        <Typography
                            variant='body1'
                            ml='100px'
                            style={{ textAlign: 'left', color: 'grey' }}
                        >
                            <BsCheck2 style={{ color: 'green' }} /> Elit natoque mollis quisque.
                        </Typography>
                        <Typography variant='body1' p='20px 0' style={{ color: 'grey' }}>
                            Metus eros tellus viverra justo sapien quam nisi odio eu nullam.
                            Justo neque nam ipsum ullamcorper lorem pellentesque donec condimentum porttitor.
                            Orci ac tempus ridiculus quis maecenas imperdiet neque nascetur veni.
                        </Typography>
                    </Grid>
                </Grid>
            </div>

            <div id="content3">
                <Grid container>
                    <Grid xs={12} md={7} m='auto' p='30px' style={{ textAlign: 'left' }}>
                        <Typography component='h2' variant='h4' style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            Tincidunt veni tellus orci aenean consectetuer
                        </Typography>
                        <Typography variant='body1' p='20px 0' component='p' style={{ color: 'grey' }}>
                            Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque vulputate dolor eget dapibus.
                            Nec vitae eros ullamcorper laoreet dapibus mus ac ante viverra.
                            A aenean sit augue curabitur et parturient nisi sed enim.
                            Nulla nec quis sit quisque sem commodo ultricies neque.
                            Lorem eget venenatis dui ante luctus ultricies tellus montes. Quis in sapien tempus.
                        </Typography>
                        <img className='content3-img' src='https://theaffairtheme.com/the-affair/wp-content/uploads/sites/2/demo-image-00019-1024x683.jpg' />
                        <Typography variant='body1' p='20px 0' component='p' style={{ color: 'grey' }}>
                            Aliquam enim arcu ut. Vulputate pede nisi arcu ut nullam.
                            Ac elit ut ullamcorper aenean dolor pede nec aliquam. Cum enim a.
                            Ut dui phasellus cras. Vivamus pulvinar justo faucibus nec semper lorem nullam.
                        </Typography>
                        <Typography variant='body1' p='20px 0' component='p' style={{ color: 'grey' }}>
                            Ut pede leo libero cum ridiculus quis arcu natoque ullamcorper eget nulla sociis.
                            Semper condimentum quam integer lorem. Amet ac dis semper eget a dictum ligula.
                            Justo eu ut. Id ridiculus lorem ut amet dis orci tellus etiam aenean pellentesque.
                            Ultricies dui vel ipsum eleifend dolor ante donec justo nullam.
                        </Typography>
                    </Grid>
                </Grid>
            </div>

            <div id="content4">
                <Grid container>
                    <Grid xs={12} md={7} m='auto' p='30px' style={{ textAlign: 'left' }}>
                        <Typography component='h2' variant='h4' style={{ fontWeight: 'bold', fontSize: '25px' }}>
                            Eu ridiculus fringilla
                        </Typography>
                        <Typography variant='body1' p='20px 0' component='p' style={{ color: 'grey' }}>
                            Nam dictum vitae penatibus ligula id sem eget ante faucibus feugiat nascetur vel.
                            Pretium vitae mus rhoncus sit maecenas quam felis orci adipiscing. Aenean parturient eget quam.
                            Leo vel lorem sociis phasellus arcu dolor. Dis donec eu pede.
                        </Typography>
                        <Grid container columns={14} >
                            <Grid xs={14} md={4} m='15px' >
                                <img className='content3-img' src='https://theaffairtheme.com/the-affair/wp-content/uploads/sites/2/demo-image-00020-960x640.jpg' />
                            </Grid>
                            <Grid xs={14} md={4} m='15px'>
                                <img className='content3-img' src='https://theaffairtheme.com/the-affair/wp-content/uploads/sites/2/demo-image-00018-960x640.jpg' />
                            </Grid>
                            <Grid xs={14} md={4} m='15px'>
                                <img className='content3-img' src='https://theaffairtheme.com/the-affair/wp-content/uploads/sites/2/demo-image-00002-960x640.jpg' />
                            </Grid>
                        </Grid>

                        <Typography variant='body1' p='20px 0' component='p' style={{ color: 'grey' }}>
                            Venenatis ante veni nullam ridiculus penatibus vidi eu consectetuer integer.
                            Vulputate ipsum lorem nascetur rhoncus. Aliquam vitae elit blandit enim eget laoreet.
                            Dapibus leo sociis quis nulla adipiscing amet integer sem ullamcorper in maecenas eu imperdiet.
                        </Typography>
                        <Typography variant='body1' p='20px 0' component='p' style={{ color: 'grey' }}>
                            Ante blandit amet ultricies ut in nam massa rhoncus. Eget eu massa nisi quis viverra dapibus aliquam.
                            Id ridiculus lorem ut amet dis orci tellus etiam aenean pellentesque.
                        </Typography>
                        <Typography variant='body1' p='20px 0' component='p' style={{ color: 'grey' }}>
                            Maecenas tempus aenean nulla viverra neque vel nec cras justo sapien condimentum ut varius.
                            Blandit sem etiam vel nullam vulputate sociis amet varius dolor. Vitae a ut.
                            Etiam rhoncus ante sit. Nisi nullam donec dui eu phasellus a elementum elit faucibus nec.
                            Eros eu pulvinar pede luctus sit aenean lorem.
                        </Typography>

                    </Grid>
                </Grid>
            </div>

            <div id='content5'>
                <Button style={{
                    color: 'black',
                    margin: '0 5px',
                }}>
                    795<br />SHARES
                </Button>
                <Button style={{
                    width: '200px',
                    height: '37px',
                    color: 'white',
                    backgroundColor: '#3b5998',
                    margin: '0 5px',
                    borderRadius: '0'
                }}>
                    <MdFacebook style={{
                        fontSize: '20px'
                    }} />
                    &nbsp; SHARE
                    <span style={{
                        color: 'lightgrey',
                        fontSize: '12px',
                        marginBottom: '-3px'
                    }}>
                        &nbsp; 461</span>
                </Button>

                {/* mzuhaib@bhumiitech.com */}
                <Button style={{
                    width: '200px',
                    height: '37px',
                    color: 'white',
                    backgroundColor: '#1DA1F2',
                    margin: '0 5px',
                    borderRadius: '0'
                }}>
                    <BsTwitter style={{
                        fontSize: '20px'
                    }} />
                    &nbsp; TWEET
                </Button>
                <Button
                    style={{
                        color: 'white',
                        height: '37px',
                        backgroundColor: '#E60023',
                        margin: '0 5px',
                        borderRadius: '0'
                    }}
                >
                    <BsPinterest />
                    <span style={{
                        color: 'lightgrey',
                        fontSize: '12px',
                        marginBottom: '-3px'
                    }}>
                        &nbsp; 334</span>
                </Button>
                <Button style={{
                    color: 'white',
                    height: '37px',
                    backgroundColor: 'black',
                    margin: '0 5px',
                    borderRadius: '0'
                }}>
                    <BsEnvelope />
                </Button>
            </div>

            <div style={{ width: '100%' }} className='grid-container'>
                <Grid style={{ width: '100%' }} className='grid-container' container spacing={0} columns={18}>
                    <Grid style={{ backgroundColor: 'aliceblue' }} item xs={18} md={6} display='flex' justifyContent='center' alignItems='center'>
                        <div>
                            <Typography variant='subtitle1' className='rotated_text' style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '20px'
                            }}>
                                You May Also Like
                            </Typography>
                        </div>
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

        </div>
    )
}