import Boton from "../Boton/Boton"
import Input from "../inputs/Input"
import "./Form.css"

const Form = () => {
  return (
    <section className='register'>
        <form >
            <h3>Registro</h3>
            <Input placeholder="Escribe tu nombre" type="Text" required/>
            <Input placeholder="Escribe tu correo" type="email" required/>
            <Input placeholder="Escribe tu contraseña" type = "password" required/>
            <Input placeholder="Confirma tu contraseña" type ="password" required/>
            <Boton/>
        </form>
    </section>
  )
}

export default Form