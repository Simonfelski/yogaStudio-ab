import React, { useState } from 'react';

const Form = () => {

    const [formData, setFormData] = useState({
        firstName:'',
        email:'',
        phoneNumber:'',
        trainingType:'',
        message:''
    })

    function handleChange(event) {
        const {name, value, type} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

  return (

    <div className="max-w-md mx-auto mt-20 mb-20 px-10">
        <h2 className='uppercase font-bold text-2xl text-center mb-3'>Napisz do mnie</h2>
  <form onSubmit={handleSubmit} className="bg-white shadow-xl border rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Imię"
        onChange={handleChange}
        value={formData.firstName}
        name="firstName"
      />
    </div>
    
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="E-mail"
        onChange={handleChange}
        value={formData.email}
        name="email"
      />
    </div>
    <div className="mb-6">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Numer telefonu"
        onChange={handleChange}
        value={formData.phoneNumber}
        name="phoneNumber"
      />
    </div>
    <div className="mb-6">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Rodzaj zajęć"
        onChange={handleChange}
        value={formData.trainingType}
        name="trainingType"
      />
    </div>
    <div className="mb-4">
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Wiadomość"
        onChange={handleChange}
        value={formData.message}
        name="message"
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="rounded-lg text-sm text-[#fff] font-semibold bg-button hover:bg-button-hover py-2 px-4 transition duration-300"
        type="submit"
      >
        Wyślij
      </button>
    </div>
  </form>
</div>
  )
}

export default Form
