import "./Input.css"

const Input = ({placeholder, type, required}) => {

  const placeholderModificado = `${placeholder}...`;
  return (
    <div className='inputs'>
      <label htmlFor=""></label>
      <input
      placeholder={placeholderModificado}
      type = {type || "text"}
      required = {required} />
    </div>
  )
}

export default Input