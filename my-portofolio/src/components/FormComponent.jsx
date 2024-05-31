import React from 'react';
import '../css/index.css';
import CardComponent from './CardComponent';


const Form = ({ dark }) => {
    return (
        <>
            <CardComponent maxWidth="lg">
                <form 
                    name="contact" 
                    method="POST" 
                    netlify
                    onSubmit="submit"
                    className='fontheader w-full mx-auto px-4 sm:px-6 lg:px-8'
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-bold mb-2'>Name :</label>
                        <input 
                            type='text' 
                            id="name" 
                            name="name" 
                            required 
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' 
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 font-bold mb-2'>Email :</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' 
                        />
                    </div>

                    <div className='mb-4'>
                        <label  className='block text-gray-700 font-bold mb-2'>Message :</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            required 
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500'
                        ></textarea>
                    </div>
                    
                    <button 
                        type='submit' 
                        className={`w-full ${dark ? 'bg-yellow-400' : 'bg-indigo-700'} text-white py-2 px-4 rounded-md hover:${dark ? 'bg-yellow-300' : 'bg-indigo-500'} focus:outline-none focus:bg-indigo-600`}
                    >
                        Submit
                    </button>
                </form>
            </CardComponent>
        </>
    );
}

export default Form;