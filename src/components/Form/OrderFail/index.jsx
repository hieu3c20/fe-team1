import React from 'react'

const OrderFail = ({onTryAgain , onClose}) => {
  return (
         <>
          <button onClick={onClose}>dong</button>
          Oder fail
          <button onClick={() => { 
            onTryAgain();
            onClose();
          }}>try again</button>
        </>
  )
}

export default OrderFail