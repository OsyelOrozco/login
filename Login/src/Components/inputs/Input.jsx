import "./Input.css"

const Input = ({placeholder}) => {

  const placeholderModificado = `${placeholder}...`;
  return (
    <div className='inputs'>
      <label htmlFor=""></label>
      <input type="text" 
      placeholder={placeholderModificado}/>
    </div>
  )
}

export default Input