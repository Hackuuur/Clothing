import React from 'react';

const Button = ({ name }) => {
  return (
    <button className="border border-white rounded-md py-1 bg-black text-white hover:bg-white hover:text-black hover:border-black duration-200 delay-100 ">
      {name}
    </button>
  );
};

export default Button;
