import React from "react";
// import('../Css/login.css');
import('../Css/Login.css');


class Login extends React.Component {
  render() {
    return (
      <>
      <div id="body">
      <div class="main">  	
		<input class="input" type="checkbox" id="chk" aria-hidden="true" />
        <div class="signup">
            <form>
                <span class="span">
                <label for="chk" aria-hidden="true">Sign up</label>
                </span>
                <input class="input" type="text" name="txt" placeholder="User name" required=""/>
                <input class="input" type="email" name="email" placeholder="Email" required=""/>
                <input class="input" type="password" name="pswd" placeholder="Password" required=""/>
                <button class="button" id="signup">Sign up</button>
            </form>
        </div>

        <div class="login">
            <form>
                <span class="span">
                <label class="lable" for="chk" aria-hidden="true">Login</label>
                </span>
                <input class="input" type="email" name="email" placeholder="Email" required=""/>
                <input class="input" type="password" name="pswd" placeholder="Password" required=""/>
                <button class="button" id="login">Login</button>
            </form>
        </div>
	</div>
    </div>
      </>
    );
  }
}

export default Login;