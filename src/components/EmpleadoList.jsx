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
      pic: "empleado01.png",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "empleado02.png",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "empleado03.png",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "empleado04.png",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "empleado05.png",
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "empleado06.png",
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
