import React, { useState } from "react";

const Form = ({addColor}) => {
  const [color, setColor] = useState("");

  const handleForm = (e) =>{
    e.preventDefault()
    addColor(color)
    
  }
  return (
    <div>
      <section className="container">
        <h4 className="color-generator"></h4>
        <form className="color-form" onSubmit={handleForm}>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input type="text" placeholder="#f15025"value={color}
            onChange={(e) => setColor(e.target.value)} />
          <button className="btn" type="submit" style={{background: color}}>generate</button>
        </form>
      </section>
    </div>
  );
};

export default Form;
