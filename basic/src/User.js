function User(props){
    return (
        <div className="App">
          <h1>User Name is {props.name}</h1>
           <h2>Email : {props.email}</h2>
           <h2>Stays at {props.other.lives}</h2>
           <h2>And a pround of {props.other.proud}</h2>
        </div>
    );
}
export default User;