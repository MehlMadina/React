import React from 'react'

export default function Form() {

const submit = (event) => {
    event.preventDefault();
    const { first_name, last_name, age } = event.target;
    console.log(first_name.value, last_name.value, age.value);
    first_name.value = '';
    last_name.value = '';
    age.value = '';
}

  return (
    <form onSubmit={submit}>
       <input type="text" name='first_name' placeholder='Firstname'/>
       <input type="text" name='last_name' placeholder='Lastname'/>
       <input type="text" name='age' placeholder='Age'/>
       <button>Add</button>
    </form>
  )
}
