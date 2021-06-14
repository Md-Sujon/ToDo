import React from 'react';

const ListItem = ({id, title, delHandler, doneHandler,done}) => {
    return (
        <li className="list-group-item d-flex justify-content-between" >
                    {done ? <del>{title}</del> : title}
                    <div>
                    <button className="btn btn-sm btn-danger m-1" onClick={() => delHandler(id)}><i className="fa fa-trash-alt"></i></button>
                    <button className="btn btn-sm btn-primary" onClick={() => doneHandler(id)}
                    >
                        {done ? 
                        (<i className="fa fa-undo-alt"></i>) : 
                        (<i className="fa fa-check"></i>)}
                        </button>
                    </div>
                </li>
    );
};

export default ListItem;