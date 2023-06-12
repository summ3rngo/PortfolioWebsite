import React from 'react'
import { useMediaQuery } from 'react-responsive';


const ProgressBar = (props) => {
    const isSmallScreen = useMediaQuery({ maxWidth: 768 });
    const {bgcolor, completed} = props;

    const containerStyles = {
        height: isSmallScreen ? 10 : 20,
        width: '100%',
        backgroundColor: "rgb(54,181,255, 0.4)",
        borderRadius: 50,
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        boxShadow: '0px 0px 5px 1px var(--primary-color)',
      }
    
    return (
        <div className='parent-container' style={containerStyles}> 
            <div style={fillerStyles}>
            </div>
        </div>
    )
}

export default ProgressBar