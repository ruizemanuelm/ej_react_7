import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import EmpleadoList from './components/EmpleadoList';
import { Container } from 'react-bootstrap';
function App() {

  return (
    <section className=''>
      <Container className='my-3'>
        <h1 className='text-center display-4'>Empleados</h1>
        <hr />
<EmpleadoList ></EmpleadoList>
      </Container>
    </section>
  )
}

export default App
