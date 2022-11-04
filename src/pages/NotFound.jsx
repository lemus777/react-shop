import React from 'react';
import '@styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className='not-found'>
      <img src="https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="notFound" />
      <p className='error'>Error 404</p>
      <p>Lo sentimos, la página a la que intenta acceder no ha sido encontrada.</p>
      <button className='primary-button navigate-button'>Volver a página principal</button>
    </div>
  );
}

export { NotFound };