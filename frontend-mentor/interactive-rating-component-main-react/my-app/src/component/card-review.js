import React, {useState} from 'react';
import Star from "../images/icon-star.svg"
import "./card-review.css"

//component funzionale per gestire la transizione di colore
//del rating
const RatingItem = ({ value, isActive, onClick }) => {
    return (
      <li 
        onClick={() => onClick(value)}
        className={isActive ? "active" : ""}
      >
        {value}
      </li>
    );
  };
const Submit = ({isActive, handleClick}) => {
    return (
        <p
            onClick={handleClick}
            className={isActive ? "active" : ""}
        >
            SUBMIT
        </p>
    );
};

const MyComponent = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [submit , setSubmit] = useState(false) 

      const handleSelect = (value) => {
        setSelectedValue(value);
        setSubmit(true);
      };
      const handleSubmit = (value) => {

      }
  return (
    <div className='container-card-review'>
        <div className='card-review'>
            <div className="card-icon">
              <img src={Star}/>
            </div>
            <div className="card-text">
                <h1>
                    How did we do?
                </h1>
                <p>
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offerig!
                </p>
            </div>
            <div className="card-rating">
                <ul>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <RatingItem 
                      key={value} 
                      value={value} 
                      onClick={handleSelect}
                      isActive={value <= selectedValue}
                    />
                  ))}
                </ul>
            </div>
            <div className="card-submit">
                {<
                    Submit
                    isActive={selectedValue != null}
                    onClick={handleSubmit}
                    />
                    }
            </div>
        </div>
    </div>
  );
}

export default MyComponent;
