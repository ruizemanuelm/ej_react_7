import React from 'react';
import { ListGroup } from 'react-bootstrap';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = ({empleado}) => {
    
    return (
        <div>
                 <ListGroup.Item >
        <div className='d-flex w-100'>
      <EmpleadoAvatar imagen={empleado.pic} ></EmpleadoAvatar>
        <section className='mx-3 '>
            <h3>{empleado.fullName}</h3>
            <div className='d-flex'>
            <p className='mx-3'>{empleado.title}</p>
            <p>{empleado.department}</p>
            </div>
        </section>
        </div>
       </ListGroup.Item>
        </div>
    );
};

export default EmpleadoRow;