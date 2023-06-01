import React from "react";
import { ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";
const EmpleadoList = () => {
  let empleados = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "https://png.pngtree.com/png-clipart/20190906/original/pngtree-520-couple-avatar-girl-avatar-little-dinosaur-cartoon-cute-png-image_4563357.jpg",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "https://png.pngtree.com/png-clipart/20201208/big/pngtree-personality-avatar-black-women-illustration-elements-png-image_5529576.png",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_4815126.jpg",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg",
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-avatar-the-icon-of-a-female-employee-wearing-suit-png-image_8537416.png",
    },
  ];
  return (
    <div>
      <ListGroup>
        {empleados.map((empleado, indice) => (
          <EmpleadoRow key={indice}empleado={empleado}></EmpleadoRow>
        ))}
      </ListGroup>
    </div>
  );
};

export default EmpleadoList;
