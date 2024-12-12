import React from 'react';
import SocialMedia from './SocialMedia'
import { HoverBorderGradient } from './ui/hover-border-gradient.tsx';

const StartSection = ({ socialMedia }) => {
  return (
    <section id="start">
      <div>
        <img src="https://raw.githubusercontent.com/DanielJoaco/portfolio/main/src/assets/avatar.jpg" alt="Foto de perfil" />
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
          <p style={{margin:'0'}}>+8 años de experiencia <strong>administrando y gerenciando</strong> equipos gastronómicos</p>
          <p style={{margin:'0'}}>Actualmente estudio <strong>desarrollo web y ciencia de datos</strong> autodidacta</p>
          <p style={{margin:'0', display:"flex", alignItems:"center", justifyContent:"center"}} >e ingeniería de sistemas en la <img src="https://raw.githubusercontent.com/DanielJoaco/portfolio/main/src/assets/logos/logotipo_UIS.png"
            alt="UIS"
            style={{ width: '20px', height: '20px',  margin: '0 0 0 0.5rem' }} />
          </p>        
        </h3>
        <SocialMedia socialMedia={socialMedia} />
      </div>
    </section>
  );
};

export default StartSection;
