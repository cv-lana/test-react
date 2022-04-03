import { useState } from "react";

export const useValue = (props) => {
  const initialState = {
    name: props ? props.name : '',
    username: props ? props.username : '',
    email: props ? props.email : '',
    street: props ? props.address.street : '',
    city: props ? props.address.city : '',
    zipcode: props ? props.address.zipcode : '',
    phone: props ? props.phone : '',
    website: props ? props.website : '',
    comment: ''
  };

  const [value, setValue] = useState(initialState);

  const changeValue = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValue(prevState => {
      return { ...prevState, [name]: value }
    });
  };

  return { value, changeValue };
};