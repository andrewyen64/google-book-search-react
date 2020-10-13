import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="form col-lg-9 col-md-8 col-sm-8 col-7">
            <input 
              onChange={props.handleInputChange} 
              value={props.search} 
              name="search" 
              type="text" 
              className="form-control" 
              placeholder="Search a Book" 
              id="search"
            />
          </div>
          <div className="formBtn col-lg-auto col-md-auto col-sm-auto col-auto">
            <button 
              onClick={props.handleFormSubmit} 
              className="btn-success"
              > Search 
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;