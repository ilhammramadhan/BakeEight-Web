import Login from "../components/Login"


const LoginPage = () =>  {
  return (
    <div className="vh-100" style={{backgroundImage : 'url(https://htmlcolorcodes.com/assets/images/html-color-codes-best-prototyping-tools.jpg)'}}>
      <div>
          <h1 className="text-center text-warning">Sign in into your account</h1>
      </div>
      
      <Login/>
    </div>
  )
}

export default LoginPage