import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import './HumanitarianPage.scss'
import bgIm from 'Assets/IllustrationChlo.jpg'
import { ProjectSlider } from 'Components/ProjectsSlider/ProjectSlider'
import { ColumnElement } from 'Components/ColumnElement/ColumnElement'
import { NewsSlider } from 'Components/Slider/Slider'
import { ContactForm } from 'Components/ContactForm/ContactForm'
import { PresentationCard } from 'Components/PresentationCard/PresentationCard'
import { Grid } from '@mui/material'
import { TitleBlock } from 'Components/TitleBlock/TitleBlock'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const HumanitarianPage = ({ slideToLeft, slideToUp }) => {
    useEffect(() => {
        slideToLeft('#box1', '0.6', '1')
    }, [])

    useEffect(() => {
        slideToLeft('.footerCard', '0', '2')
    }, [])

    useEffect(() => {
        slideToUp('.ft1', '1', '2')
    }, [])
    useEffect(() => {
        slideToLeft('.ft2', '2', '2')
    }, [])
    useEffect(() => {
        slideToUp('.ft3', '3', '2')
    }, [])

    return (
        <>
            <div className="humaPadding">
                <div id="box1" className="box box1">
                    <PresentationCard
                        bgImage={bgIm}
                        span1="A"
                        span2="la"
                        span3="Une"
                        text="Nos projets à caractère Humanitaires sont portés par
                                notre Association Franco Ukrainienne BALZAC HANSKA
                                qui possède une structure en France et en Ukraine,
                                depuis plus de 10 ans
                               
                    Le huitième camion bien rempli à quitté la France le 21 decembre 2022 et est arrivé sans incident en Ukraine le 26 decembre. Grace aux efforts de nous tous reunis nous avons pu envoyer les produits de première necessité , tant attendus par nos amis ukrainiens. "
                    />
                </div>{' '}
                <Grid container className="container">
                    <Grid item sm={12} md={4}>
                        <ColumnElement
                            className="humaContent"
                            text='<div class="title2">Ce n’est que le début !</div><p class="italic pDarkTheme">Vous pouvez nous rejoindre dans cette belle aventure humaine et nous aider dans nos différentes actions à venir et/ou par vos contributions financière sur le compte de notre association 
    <span class="boldWhite">- IBAN FR76 3007 6020 8918 4734 0020 022.</span></p>'
                        />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <ColumnElement
                            text='<div class="title2">Ou...</div><p class="pDarkTheme">
                                Il vous suffit de cliquer sur<a
                                    href="https://www.helloasso.com/associations/association-franco-ukrainienne-balzac-et-hanska/formulaires/1."
                                    target="_blank"
                                    title="HELLOASSO"
                                    rel="noreferrer"
                                > le lien</a>
                                et de vous laisser guider.L’Association Franco
                                Ukrainienne BALZAC HANSKA est une Association loi de
                                1901 N° W941007660 –
                                <span class="boldWhite">ouvrant droit à une réduction d’impôt et délivrance d’un certificat de déductibilité fiscale.</span></p>'
                        />
                    </Grid>

                    <Grid item sm={12} md={4}>
                        <ColumnElement
                            text='<div class="title2">Devenir benevole</div>
                                <p class="pDarkTheme">
                                    Si vous avez des idées ou des projets à partager et
                                    à developper avec nous,<span class="boldWhite">
                                        contactez nous via le formulaire ou le mail.</span>
                                </p>
'
                        />
                    </Grid>
                </Grid>
                <NewsSlider />
            </div>

            <TitleBlock
                title="<h2 class='titleH2'>L’UKRAINE A BESOIN DE NOUS, AIDONS-LA ET SOYONS ENGAGES !!</h2>"
                text="<p class='pDarkTheme'>
                Cette terrible guerre en Ukraine n’a malheureusement pas
                cessé... L’hiver arrive et nos amis ukrainiens ont besoin de
                nous.L’état ukrainien a demandé aux régions de réouvrir des
                anciens hôpitaux ou autres centres d’accueil fermés afin de
                pouvoir accueillir la population déplacée dans l’ouest de
                l’Ukraine qui se compte par millions de personnes.
            </p><p className='pDarkTheme'>
                Cependant les infrastructures sont souvent vétustes.La
                plupart du temps ces réouvertures se sont faites dans
                l’urgence afin de procurer à ces déplacés le minimum en
                matière de logement pour survivre avec des conditions
                sanitaires à la limite de l’acceptabilité. La capacité de
                ces établissements varie entre 150 et 300 déplacés. Nous
                souhaitons leur venir en aide! Ci-après un exemple urgent
                identifié lors de nos dernières missions en Ukraine.
            </p>"
            />

            <ProjectSlider />
        </>
    )
}
