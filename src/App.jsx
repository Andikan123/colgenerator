import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';



const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10))
  console.log(colors)
  toast.success('awesome');


  const addColor = (color)=>{
    try {
      const newColor = new Values(color).all(10)
      setColors(newColor)
    } catch (error) {
      toast.error(error);
    }
   
  }
  return <main>
    <Form addColor={addColor}/>
    <ColorList colors={colors}/>
    <ToastContainer position='top-center' />
  </main>;
};
export default App;
