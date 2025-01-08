import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  async function fetchGitHubInfo() {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserInfo(response.data);
      setError(null);
    } catch(err) {
      setError("User not found. Please check the username.");
      setUserInfo(null);
    }
  };

  return (
    <div className='container'>
      <h1 className='title'>GitHub Info Cards</h1>
      <div className='inputContainer'>
        <input 
          type="text" 
          placeholder='Enter GitHub Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='input'
        />
        <button onClick={fetchGitHubInfo} className='button'>Search</button>
      </div>
      <br />
      {error && <p className='error'>{error}</p>}
      {userInfo && (
        <div className='card'>
          <img src={userInfo.avatar_url} alt='Avatar' className='avatar' />
          <h2>{userInfo.name || "No Name Provided"}</h2>
          <p>@{userInfo.login}</p>
          <p>{userInfo.bio || "No Bio Available"}</p>
          <p>
            <strong>Followers: </strong>{userInfo.followers}
          </p>
          <p>
            <strong>Following: </strong>{userInfo.following}
          </p>
          <a href={userInfo.html_url} target='_blank' rel="noopener noreferrer" className='link'>View Profile</a>
        </div>
      )}
    </div>
  );
};

export default App
