import React ,{useState} from 'react'

function ColorPicker() {

    const [color,setColor]=useState('#dadada')
    function handleColorChange(event){

        setColor(event.target.value)
    }
  return (
    <div className='main'>
        <h1>color picker</h1>
        <div className="container" style={{backgroundColor:color}}>
        </div>
            <h2 style={{color:'#000'}}>Selected Color : {color}</h2>
            <input type="color" value={color} name="" id=""  onChange={handleColorChange}/>


    </div>
  )
}

export default ColorPicker