import './index.css';
import React from 'react';

function DinamicForm(props) {

    console.log(props.data)
  return (
    <div className="form-content">
        <h1>{props.data.titulo}</h1>
        {props.data.campos.sort((a, b) => Number(a.ordem) - Number(b.ordem)).map((item, key) => { 
            if(item.type === "select") {
                return (
                    <div key={key}>
                        <label>{item.label}</label>
                        <select className={`input--select`} id={item.key} name={item.name}>
                            {item.options.map((option, k) => {
                                return (
                                    <option key={k} value={option.value}>{option.text}</option>
                                )
                            })}
                        </select>
                    </div>
                )
            } else {
                return (
                    <div key={key}>
                        <label>{item.label}
                        </label>
                            <input type={item.type} className={`input`} id={item.key} name={item.name}/>
                    </div>
                )
                
            }
        })}
    </div>
  );
}

export default DinamicForm;