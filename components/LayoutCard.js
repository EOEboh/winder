import React from 'react'

const LayoutCard = ({
    width,
    height,
    display,
    borderRadius,
    padding,
    margin,
    color,
    backgroundColor,
    className,
    children
}) => {
  return (
    <div 
    className={className}
     style={{
        width:`${width}`,
        height: `${height}`,
        display: `${display}`,
        borderRadius: `${borderRadius}`,
        padding: `${padding}`,
        margin: `${margin}`,
        color: `${color}`,
        backgroundColor: `${backgroundColor}`

     }}
    >
        {children}
    </div>
  )
}

export default LayoutCard