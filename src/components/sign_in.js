import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = async (event) => {
    event.preventDefault();  // Prevent the form from refreshing the page

    // Send a POST request with the login and password
    const response = await fetch('http://localhost:8080/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
		"username":loggedIn,
		"password":email
	  })
    });

    // Check the response
    if (response.ok) {
      console.log('Login successful');
      // Navigate to another page here if needed
    } else {
      console.error('Login failed');
    }
  }

  const preventRefresh = (e) => { // Define preventRefresh if needed
    e.preventDefault();
  }

  return (
    <div className="wrapper signIn">
      <div className="illustration">
        <img src="https://source.unsplash.com/random" alt="illustration" />
      </div>
      <div className="form">
        <div className="heading">LOGIN</div>
        <form onSubmit={preventRefresh}> {/* Use onSubmit if needed */}
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="e-mail">E-Mail</label>
            <input type="email" id="e-mail" placeholder="Enter you mail" />
          </div>
          <button type="submit" onClick={onButtonClick}>
            Submit
          </button>
        </form>
        <p>
          Don't have an account ? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Signin
