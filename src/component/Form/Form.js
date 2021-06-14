import React from 'react';

const Form = ({todo,change,submit,error}) => {
    return (
        <form className="form-group Warp row mb-2" onSubmit={submit}>
            <div className="col-9">
                <input type="text" className="form-control-plaintext border" value={todo}
                onChange={change}
                />
                {error && <small className="text-danger">{error}</small>}
            </div>
            <div className="col-3">
                <button type="submit" className="btn btn-success">Add Todo</button>
            </div>
        </form>
    );
};

export default Form;