import React from 'react';

const EmpleadoAvatar = ({imagen}) => {
    return (
        <div>
              <section>
            <img src={imagen} alt="avatar" className='avatar rounded-5'/>
        </section>
        </div>
    );
};

export default EmpleadoAvatar;