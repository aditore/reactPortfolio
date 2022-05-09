import React from 'react';

function ContactForm() {
    return(
        <div className='formControl'>
            <h3 className='m-3'>Send me a message if you would like to get in touch!</h3>
            <form className='col-9'>
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input type="input" className="form-control" placeholder="What's your name?" required></input>
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email address</label>
                  <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" required></input>
                  <small className="form-text text-muted">Only I can see this!</small>
                </div>
                <div className="form-group">
                  <label htmlFor="messageInput">Type me a message!</label>
                  <textarea type="input" className="form-control" rows='5' required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;