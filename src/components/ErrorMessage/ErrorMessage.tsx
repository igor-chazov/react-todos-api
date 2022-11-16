import React from 'react';

interface IErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({ message }) => {
  return (
    <div className="error-message" role="alert" style={{
      borderLeft: '1px solid #b4b4b4',
      borderRight: '1px solid #b4b4b4',
      borderBottom: '1px solid #b4b4b4',

    }}>
      <div className="error-wrapper" style={{
        fontStyle: 'italic',
        width: '100%',
        backgroundColor: 'rgb(255, 155, 155)',
        textAlign: 'center',
        padding: '20px',
      }}
      >
        Ошибка: {message}
      </div >
    </div >
  )

}

export default ErrorMessage;
