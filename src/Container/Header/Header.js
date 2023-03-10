import React, { useEffect } from 'react'
import './Header.scss'
import { useState } from 'react'
import { Menu } from 'Components/Menu/Menu'
import { Container, Grid } from '@mui/material'
import { Logo } from 'Components/LogoBalzacHanska/Logo'
import { SlidingButton } from 'Components/MyButton/SlidingButton'

export const Header = ({ onLoad }) => {
    const [sticky, setSticky] = useState(false)

    const stickyNav = () => {
        if (window.scrollY > 300) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    window.addEventListener('scroll', stickyNav)
    useEffect(() => {
        onLoad()
    }, [])
    return (
        <header className={sticky ? 'main_h sticky' : 'main_h'}>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={6} md={4} className="slidingButton">
                        <SlidingButton buttonText="Faire un don ou adherer" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="logo">
                        <Logo />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} className="headerMenu">
                        <Menu />
                    </Grid>

                    {/* <Grid item xs={12} className="annonceImpot" id="easing">
                        L’Association Franco Ukrainienne BALZAC HANSKA est une
                        Association loi de 1901 N° W941007660 – ouvrant droit à
                        une réduction d’impôt et délivrance d’un certificat de
                        déductibilité fiscale.{' '}
                    </Grid> */}
                </Grid>
            </Container>
        </header>
    )
}
