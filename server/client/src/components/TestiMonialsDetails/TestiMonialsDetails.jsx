import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, occupation, description, img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div className="item">
            <div className="shadow-effect">
                <img className="img-circle" src={img} alt="pic" />
                <p>"{description}"</p>
            </div>
            <div className="testimonial-name">
                <h5>{name}</h5>
                <small>{occupation}</small>
            </div>
        </div>
    );
};

export default TestiMonialsDetails;