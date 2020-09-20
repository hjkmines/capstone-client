import React from 'react'; 
import './CreateTicket.css'; 

const CreateTicket = () => {

    return (
        <div>
            <form>
                <input type='text' className='input'/>
                <input type='text' className='input'/>
                <input type='text' className='input'/>
                <input type='text' className='input'/>
                <input type='text' className='input'/>
                <button type='submit' />
            </form>
        </div>
    )
}; 

export default CreateTicket; 