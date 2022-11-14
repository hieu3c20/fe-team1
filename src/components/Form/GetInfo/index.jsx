import React from 'react'

const GetInfo = ({handleCloseCheckOut , handleIncrea , handleDecrea }) => {
  return (
    <>
          <button onClick={handleCloseCheckOut}>dong</button>
          <button onClick={handleDecrea}>back</button>
          Thong tin nguowi dung
          <button onClick={handleIncrea}>continue</button>
    </>
  )
}

export default GetInfo