import React from 'react'

const XData = ({newdata}) => {
    return (
        <div className="xdata" style={{
            width: '20%', 
            height: '34.5%', 
            position:'absolute'
            }} 
            >
            {newdata.map(newdata => (
                <div key={newdata.name}>{newdata.id} - {newdata.name}</div>
            ))}
        </div>
    )
}

export default XData
