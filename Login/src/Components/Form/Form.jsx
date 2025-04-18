import Boton from "../Boton/Boton"
import Input from "../inputs/Input"
import "./Form.css"

const Form = () => {
  return (
    <section className='register'>
        <form >
            <h3>Registro</h3>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            <Boton/>
        </form>
    </section>
  )
}

export default Form