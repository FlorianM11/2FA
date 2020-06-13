import React from 'react';

const Items = ({ id, title, body }) => (
    <div key={id} className="col-md-4 mb-3">
        <div className="card h-100">
            <div className="card-body">
                <p>{id}</p>
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{body}</p>
            </div>
        </div>
    </div>
);

export default Items;
