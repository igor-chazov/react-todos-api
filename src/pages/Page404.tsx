import React from 'react';

const Page404: React.FC = () => {
  return (
    <section className="page404 container">
      <div className="page404-wrapper">
        <h1 className="text-danger">404</h1>
        <h3 className="page404-title">Страница не существует !</h3>
        <p className="page404-content">Скорее всего страница была удалена или у нее сменился URL адрес!</p>
        <a href="/" className="btn btn-home btn-clear">Перейти на главную страницу</a>
      </div>
    </section>
  );
}

export default Page404;
