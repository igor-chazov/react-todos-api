import React from 'react';
import loader from '../../img/loading@2x.gif'

const Loader: React.FC = () => {
  return (

    <div className="loader" role="status" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderLeft: '1px solid #b4b4b4',
      borderRight: '1px solid #b4b4b4',
      borderBottom: '1px solid #b4b4b4',
      padding: '15px 50px',
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}>
      <img className="loader-img" src={loader} alt="loader" style={{
        width: '40px',
        height: '40px',
      }} />
      <span className="_visually-hidden text-center">Загрузка...</span>
    </div>
  )
}

export default Loader;
