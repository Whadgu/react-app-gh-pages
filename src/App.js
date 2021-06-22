import './App.css';

function App() {
  return (
    <div className= "container">
    <div className="learn">
        <h1>Learn to code by watching others</h1>

        <p>
            See how exprience developers solve problems in real-time.
            Watching scripted tutorial is great, but understanding how developers think is invaluable.
        </p>
    </div> 
    <div className=" form-container">
        <div className="try">
            <b>try try free 7 days</b><a href="/" className="link-1">then $20/mo. thereater</a>
        </div>
        <form action="">
            <input type="text" name="first_name" placeholder="First Name"/>
            <input type="text" name="last_name" placeholder="Last Name"/>
            <input type="email" name="email" placeholder="Email Address"/>
            <input type="password" name="password" placeholder="Password"/>
            <button type="submit" className="form-btn">CLAIM YOUR FREE TRIAL</button>
        </form>
    </div>
</div>
  );
}

export default App;
