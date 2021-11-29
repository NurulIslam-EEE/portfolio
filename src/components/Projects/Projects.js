import React from 'react';
import p1 from '../../images/1.png';
import p2 from '../../images/2.png';


const projects = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <img style={{ height: '100vh', width: '90%' }} src={p1} alt="" />
                    </div>

                </div>
                <div className="col-md-6">

                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img style={{ height: '100vh', width: '90%' }} src={p2} alt="" />
                </div>
                <div className="col-md-6">

                </div>
            </div>
            <div className="row">
                <div className="col-md-6">

                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
    );
};

export default projects;