import { useState, useEffect } from "react";
import * as yup from "yup";
import {axios} from "axios";
import { createBrowserHistory as history } from 'history';
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route, Switch } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap'
import { Dropdown } from "react-bootstrap";
import { set } from "lodash";



let schema = yup.object().shape({
    name: yup.string().min(2, "must be at least two characters"),
    //size: yup.required("pizza size is required"),
    //sauce: yup.string().required("Must select a sauce"),
  });
  

export default function Form() 
{
    const initialFormValues = ({
        name: "",
        size: "",
        sauce:"",
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
        topping5: false,
        topping6: false,
        topping7: false,
        topping8: false,
        topping9: false,
        topping10: false,
        special_instructions: "" 

    })
    const [toppings, setToppings] = useState([])
    
    const[form, setForm] = useState(
        initialFormValues
    ); 
   /* const [errors, setErrors] = useState(initialFormValues);

    const setFormErrors = (name, value) => {
        yup
          .reach(schema, name)
          .validate(value)
          .then(() => setErrors({ ...errors, [name]: "" }))
          .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
      };
    */
//
//const newToppings = []
//const newArray = update(initialArray, {$push: [4]}); // => [1, 2, 3, 4]
   const handleChange = (e) => {
        //const { value, name } = e.target;
        const { name, type, value, checked } = e.target;
        setForm({ ...form, [name]: value });
        //setFormErrors(name, value);
        console.log(form)
     
      };
      const trySubmit = (e) => {
          e.preventDefault();
          console.log("Why not");
      }
      const submit = (e) => {
        e.preventDefault();
        const newOrder = {
          size: form.size,
          sauce: form.sauce,
          topping1: form.topping1,
          topping2: form.topping2,
          topping3: form.topping3,
          topping4: form.topping4,
          topping5: form.topping5,
          topping6: form.topping6,
          topping7: form.topping7,
          topping8: form.topping8,
          topping9: form.topping9,
          topping10: form.topping10,
          special_instructions: form.special_instructions
        
        };
        axios
          .post("https://reqres.in/api/chickens", newOrder)
          .then((res) => {
            console.log(res);
            setForm(initialFormValues);
            
          })
          .catch((err) => {
            debugger;
          });
      };
    
    return(
        <div className="pizza-form">
        <h1>Build Your Own Pizza</h1>
        <div className = "nav"> 
        <Router>
        <Link to="/">Home</Link>
        </Router>
        </div>
        <h3>Build Your Own ZA</h3>
        <form onSubmit={trySubmit}>
        <div className= "customer-name">
        <label>
          Pick up Name:
          <input
            value={form.name}
            name="name"
            type="text"
            onChange={handleChange}
          />
          </label>
          </div>
        <div className = "size-dropdown">
            <h4>Choice of Size</h4>
            <p>Required</p>
        </div>
        <Dropdown onClick = {handleChange} value = {form.size} name = "size">
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Pizza Size
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <ButtonGroup aria-label="Basic example">
  <Button value = "small" name = "size">Small</Button>
  <Button value="medium" name = "size">Medium</Button>
  <Button value="large" name = "size">Large</Button>
  <Button value="xtra large" name = "size">Xtra Large</Button>
  <Button value="stuffed crust" name = "size">Stuffed Crust</Button>
  <Button value="square pie" name = "size">Square Pie</Button>
</ButtonGroup>
  </Dropdown.Menu>
</Dropdown>

<div className = "sauce">
            <h4>Choice of Sauce</h4>
            <p>Required</p>
        <label>
          Original Red
          <input
            name="sauce"
            type="radio"
            value="original red"
            checked={form.sauce === "original red"}
            onChange={handleChange}
          />
        </label>
        <label>
          Garlic Ranch
          <input
            name="sauce"
            type="radio"
            value="garlic ranch"
            checked={form.sauce === "garlic ranch"}
            onChange={handleChange}
          />
        </label>
        <label>
          BBQ Sauce
          <input
            name="sauce"
            type="radio"
            value="bbq sauce"
            checked={form.sauce === "bbq sauce"}
            onChange={handleChange}
          />
        </label>
        <label>
          Spinach Alfredo
          <input
            name="sauce"
            type="radio"
            value="spinach alfredo"
            checked={form.sauce === "spinach alfredo"}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className = "toppings">
            <h4>Toppings</h4>
            <label>
          Pepperoni
          <input
            name="topping10"
            value = "pepperoni"
            type="checkbox"
            checked={form.topping10.value}
            onChange={handleChange}
          />
        </label>
        <label>
          Sausage
          <input
            name="topping1"
            value = "sausage"
            type="checkbox"
            checked={form.topping1.value}
            onChange={handleChange}
          />
        </label>
        <label>
          Black Olives
          <input
            name="topping2"
            value = "black olives"
            type="checkbox"
            checked={form.topping2.value}
            onChange={handleChange}
          />
        </label>
     
        <label>
         Ham
          <input
            name="topping3"
            value = "ham"
            type="checkbox"
            checked={form.topping3.value}
            onChange={handleChange}
          />
        </label>
        <label>
         Canadian Bacon
          <input
            name="topping4"
            value = "canadian bacon"
            type="checkbox"
            checked={form.topping4.value}
            onChange={handleChange}
          />
        </label>
        <label>
          Pineapple
          <input
            name="topping5"
            value = "pineapple"
            type="checkbox"
            checked={form.topping5.value}
            onChange={handleChange}
          />
        </label>
        <label>
          Diced Tomatoes
          <input
            name="topping6"
            value = "diced tomatoes"
            type="checkbox"
            checked={form.topping6.value}
            onChange={handleChange}
          />
        </label>
        <label>
          Green Pepper
          <input
            name="topping7"
            value = "green pepper"
            type="checkbox"
            checked={form.topping7.value}
            onChange={handleChange}
          />
        </label>
        <label>
          Artichoke Hearts
          <input
            name="topping8"
            value = "artichoke hearts"
            type="checkbox"
            checked={form.topping8.value}
            onChange={handleChange}
          />
        </label>
        <label>
          Extra Cheese
          <input
            name="topping9"
            value = "extra cheese"
            type="checkbox"
            checked={form.topping9.value}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className= "special_instructions">
        <label>
          Special Instructions:
          <input
            value={form.special_instructions}
            name="special_instructions"
            type="text"
            onChange={handleChange}
          />
          </label>
          </div>
          <div className="submit">
              <Button onClick={submit}>Submit</Button>
          </div>
          </form>
        </div>
        
    );
}