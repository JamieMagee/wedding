import React from 'react'

export default props => {
  return (
    <div className="curved-decoration" style={{backgroundColor: props.backgroundColor}}>
      <svg
        width="100%"
        height="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 2560 168.6227"
        enableBackground="new 0 0 2560 168.6227"
        fill={props.color}
      >
        <g></g>
        <g>
          {props.flip ? (
            <path
              d="M2560,0c0,0-219.6543,165.951-730.788,124.0771c-383.3156-31.4028-827.2138-96.9514-1244.7139-96.9514
      c-212.5106,0-439,3.5-584.4982,1.5844l0,139.9126h2560V0z"
            ></path>
          ) : (
            <path
              d="M0,0c0,0,219.6543,165.951,730.788,124.0771c383.3156-31.4028,827.2139-96.9514,1244.7139-96.9514
      c212.5106,0,438.9999,3.5,584.4982,1.5844v139.9126H0V0z"
            ></path>
          )}
        </g>
      </svg>
    </div>
  )
}
