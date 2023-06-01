import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import EmpleadoList from './components/EmpleadoList';
import { Container } from 'react-bootstrap';
function App() {

  return (
    <section className=''>
      <Container className='my-3'>
<EmpleadoList ></EmpleadoList>
      </Container>
    </section>
  )
}

export default App
