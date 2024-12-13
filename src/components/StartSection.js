import React from 'react';
import SocialMedia from './SocialMedia'
import { HoverBorderGradient } from './ui/hover-border-gradient.tsx';

const StartSection = ({ socialMedia }) => {
  return (
    <section id="start">
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <img style={{ width: '25rem', height: '25rem'}} src="https://raw.githubusercontent.com/DanielJoaco/portfolio/main/src/assets/avatar.jpg" alt="Foto de perfil" />
        <a href='mailto:danieljorjuela@gmail.com'>
            <HoverBorderGradient 
              containerClassName="my-custom-class" // Puedes ajustar las clases si es necesario
              className="additional-class"
              duration={1} // Tiempo para la rotación de la animación
            >Disponible para trabajar
            </HoverBorderGradient>
            </a>
      </div>
      <div>
        <h1 style={{margin:'0'}}>
          Hola, soy <strong>Daniel Joaco</strong>
        </h1>
        <h3 >
          <p style={{margin:'0', fontSize:"2rem"}}>+8 años de experiencia <strong>administrando y gerenciando</strong> equipos gastronómicos</p>
          <p style={{margin:'0', fontSize:"2rem"}}>Actualmente estudio <strong>desarrollo web y ciencia de datos</strong> autodidacta</p>
          <p style={{margin:'0 0 2rem 0', display:"flex", alignItems:"center", justifyContent:"center", fontSize:"2rem"}} >e ingeniería de sistemas en la <img src="https://raw.githubusercontent.com/DanielJoaco/portfolio/main/src/assets/logos/logotipo_UIS.png"
            alt="UIS"
            style={{ width: '2em', height: '3rem',  margin: '0 0 0 0.3rem' }} />
          </p> 
          <a href='https://drive.google.com/file/d/1Z3v1ggUCuKuB_5L07c4UB4_xtiwG59sW/view?usp=sharing' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <HoverBorderGradient 
              containerClassName="my-custom-class" // Puedes ajustar las clases si es necesario
              className="additional-class"
              duration={1} // Tiempo para la rotación de la animación
            >Carta de presentación
            </HoverBorderGradient>
            </a>       
        </h3>

        <SocialMedia socialMedia={socialMedia} />
      </div>
    </section>
  );
};

export default StartSection;
