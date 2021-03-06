import React from 'react'
import './styles.css'
import img from '../../assets/image.png'
import ImgGithub from '../../assets/icons8-github-50.png'
import ImgLinkedin from '../../assets/icons8-linkedin-50.png'
import ImgInstagram from '../../assets/icons8-instagram-50.png'


const AboutmeContent = () => {
    return (
        <div>
            <div className="contentAboume">
                <img className="image" src={img} alt="desenvolvedora do site" />               
                    <div className="aboutmeParagraph">
                        <p> 
                            Gabriela mora em Brasília, é graduada em História pela Universidade de Brasília, atua como professora de Inglês para crianças e adultos. É co-fundadora do Arquivo Lésbico Brasileiro, onde também leciona cursos e atua como Controladora Fiscal. Começou sua trajetória na área de tecnologia através do curso online Eu ProgrAmo em 2020, e se formou em 2021, no bootcamp da turma 10 da Reprograma. Dedica seu tempo aos estudos afim de se tornar uma Desenvolvedora Front-End e conseguir sua primeira oportunidade.
                        </p>
                    </div>           
                
                <div className="socialMedia">
                    <a href="https://github.com/gabrielacsalesc" target="_blank"  rel="noreferrer">
                        <img className="github" src={ImgGithub} alt="logotipo github na cor branca" />
                    </a>

                    <a href="https://www.linkedin.com/in/gabriela-coutinho-sales-2ab982184/" target="_blank"  rel="noreferrer">
                        <img className="linkedin" src={ImgLinkedin} alt="logotipo linekdin na cor branca" />
                    </a>

                    <a href="https://www.instagram.com/arquivolesbicobrasileiro/" target="_blank"  rel="noreferrer">
                        <img className="instagram" src={ImgInstagram} alt="logotipo instagram na cor branca" />
                    </a>
                </div>    
            </div>  
    )   </div>
)}
export default AboutmeContent
