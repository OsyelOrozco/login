import Boton from "../Boton/Boton"
import Input from "../inputs/Input"
import "./Form.css"

const Form = () => {
  return (
    <section className='register'>
        <form >
            <h3>Registro</h3>
            <Input placeholder="Escribe tu nombre"/>
            <Input placeholder="Escribe tu correo"/>
            <Input placeholder="Escribe tu contraseña"/>
            <Input placeholder="Confirma tu contraseña"/>
            <Boton/>
        </form>
    </section>
  )
}

export default Form