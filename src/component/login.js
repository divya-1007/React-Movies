import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FooterOuter from './FooterOuter'
import './login.css';
import swal from 'sweetalert';
// {
//   "username": "karn.yong@mecallapi.com",
//   "password": "mecallapi"
// }

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  async function loginUser(credentials) {
    console.log(credentials ,"kef");
    return fetch('https://www.mecallapi.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(credentials),
    })
      .then(data => data.json())
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await loginUser({
      username,
      password
    });
      if ('accessToken' in response) {
        console.log(response ,"efif");
        swal("Success", response.message, "success", {
          buttons: false,
          timer: 2000,
        })
        .then((value) => {
          localStorage.setItem('accessToken', response['accessToken']);
          localStorage.setItem('user', JSON.stringify(response['user']));
          window.location.href = "/dashboard";
        });
      } else {
        swal("Failed", response.message, "error");
      }
  };

  // javascript Style 
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  // let x = Math.floor(Math.random() * 10);
  // console.log(sign_up_btn ,`sign_uphkifgk${x}`);
  if(sign_up_btn !== null){
  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode" );
  });
}
if(sign_in_btn  !== null){
  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });
}
  
  const htmlEl = document.getElementsByTagName("html")[0];
  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;
  if (currentTheme) {
    htmlEl.dataset.theme = currentTheme;
  }
  const toggleTheme = (theme) => {
    htmlEl.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  };
  
  const togglePassword = document.querySelector("#togglePassword");
  const passwords = document.querySelector("#id_password");
  
  if(togglePassword !== null){
  togglePassword.addEventListener("click", function (e) {
    const type =
    passwords.getAttribute("type") === "password" ? "text" : "password";
    passwords.setAttribute("type", type);
    this.classList.toggle("fa-eye-slash");
  });
}
  
  const toggleReg = document.querySelector("#toggleReg");
  const pass = document.querySelector("#id_reg");
  
  if(toggleReg !== null){
  toggleReg.addEventListener("click", function (e) {
    const type = pass.getAttribute("type") === "password" ? "text" : "password";
    pass.setAttribute("type", type);
    this.classList.toggle("fa-eye-slash");
  });
}
  // KEYBOARD
  
  const Keyboard = {
    elements: {
      main: null,
      keysContainer: null,
      keys: []
    },
  
    eventHandlers: {
      oninput: null,
      onclose: null
    },
  
    properties: {
      value: "",
      capsLock: false
    },
  
    init() {
      // Create main elements
      this.elements.main = document.createElement("div");
      this.elements.keysContainer = document.createElement("div");
  
      // Setup main elements
      this.elements.main.classList.add("keyboard", "keyboard--hidden");
      this.elements.keysContainer.classList.add("keyboard__keys");
      this.elements.keysContainer.appendChild(this._createKeys());
  
      this.elements.keys = this.elements.keysContainer.querySelectorAll(
        ".keyboard__key"
      );
  
      // Add to DOM
      this.elements.main.appendChild(this.elements.keysContainer);
      document.body.appendChild(this.elements.main);
  
      // Automatically use keyboard for elements with .use-keyboard-input
      document.querySelectorAll(".use-keyboard-input").forEach((element) => {
        element.addEventListener("focus", () => {
          this.open(element.value, (currentValue) => {
            element.value = currentValue;
          });
        });
      });
    },
  
    _createKeys() {
      const fragment = document.createDocumentFragment();
      const keyLayout = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "backspace",
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "caps",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "enter",
        "done",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "?",
        "space"
      ];
  
      // Creates HTML for an icon
      const createIconHTML = (icon_name) => {
        return `<i class="material-icons">${icon_name}</i>`;
      };
  
      keyLayout.forEach((key) => {
        const keyElement = document.createElement("button");
        const insertLineBreak =
          ["backspace", "p", "enter", "?"].indexOf(key) !== -1;
  
        // Add attributes/classes
        keyElement.setAttribute("type", "button");
        keyElement.classList.add("keyboard__key");
  
        switch (key) {
          case "backspace":
            keyElement.classList.add("keyboard__key--wide");
            keyElement.innerHTML = createIconHTML("⌫");
  
            keyElement.addEventListener("click", () => {
              this.properties.value = this.properties.value.substring(
                0,
                this.properties.value.length - 1
              );
              this._triggerEvent("oninput");
            });
  
            break;
  
          case "caps":
            keyElement.classList.add(
              "keyboard__key--wide",
              "keyboard__key--activatable"
            );
            keyElement.innerHTML = createIconHTML("⇪");
  
            keyElement.addEventListener("click", () => {
              this._toggleCapsLock();
              keyElement.classList.toggle(
                "keyboard__key--active",
                this.properties.capsLock
              );
            });
  
            break;
  
          case "enter":
            keyElement.classList.add("keyboard__key--wide");
            keyElement.innerHTML = createIconHTML("↵");
  
            keyElement.addEventListener("click", () => {
              this.properties.value += "\n";
              this._triggerEvent("oninput");
            });
  
            break;
  
          case "space":
            keyElement.classList.add("keyboard__key--extra-wide");
            keyElement.innerHTML = createIconHTML("⎵");
  
            keyElement.addEventListener("click", () => {
              this.properties.value += " ";
              this._triggerEvent("oninput");
            });
  
            break;
  
          case "done":
            keyElement.classList.add(
              "keyboard__key--wide",
              "keyboard__key--dark"
            );
            keyElement.innerHTML = createIconHTML("✓");
  
            keyElement.addEventListener("click", () => {
              this.close();
              this._triggerEvent("onclose");
            });
  
            break;
  
          default:
            keyElement.textContent = key.toLowerCase();
  
            keyElement.addEventListener("click", () => {
              this.properties.value += this.properties.capsLock
                ? key.toUpperCase()
                : key.toLowerCase();
              this._triggerEvent("oninput");
            });
  
            break;
        }
  
        fragment.appendChild(keyElement);
  
        if (insertLineBreak) {
          fragment.appendChild(document.createElement("br"));
        }
      });
  
      return fragment;
    },
  
    _triggerEvent(handlerName) {
      if (typeof this.eventHandlers[handlerName] == "function") {
        this.eventHandlers[handlerName](this.properties.value);
      }
    },
  
    _toggleCapsLock() {
      this.properties.capsLock = !this.properties.capsLock;
  
      for (const key of this.elements.keys) {
        if (key.childElementCount === 0) {
          key.textContent = this.properties.capsLock
            ? key.textContent.toUpperCase()
            : key.textContent.toLowerCase();
        }
      }
    },
  
    open(initialValue, oninput, onclose) {
      this.properties.value = initialValue || "";
      this.eventHandlers.oninput = oninput;
      this.eventHandlers.onclose = onclose;
      this.elements.main.classList.remove("keyboard--hidden");
    },
  
    close() {
      this.properties.value = "";
      this.eventHandlers.oninput = oninput;
      this.eventHandlers.onclose = onclose;
      this.elements.main.classList.add("keyboard--hidden");
    }
  };
  
  window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
  });
  return (
    <>
    <div className="backgrounData">
    <div className="container">
    <div className="forms-container">
      <div className="signin-signup">
        <form onSubmit={handleSubmit} className="sign-in-form">
          <h2 className="title">Login Here!..</h2>
          {/* <i className="fa fa-lock ">no spinner but why</i> */}
          <div className="input-field">
            <i className="fa fa-user" style={{color:"#000"}}></i>
            <input type="text" value={username} name="username"  onChange={e => setUserName(e.target.value)} placeholder="Username" required="yes"/>
          </div>
          <div className="input-field">
            <i className="fa fa-lock" style={{color:"#000"}}></i>
            <input type="password"  value={password} name="password" onChange={e => setPassword(e.target.value)} placeholder="Password"  required="yes"/>
            <i className="fa fa-eye" id="togglePassword" style={{cursor:"pointer" ,color:"#000"}}></i>
          </div>
        
          <Link className="pass" to="#">Forgot your password?</Link>
          <input type="submit" value="Sign in" className="btns solid"/>
        
        </form>
        <form   className="sign-up-form">
          <h2 className="title">Register Now!..</h2>
          <div className="input-field">
            <i className="fa fa-user"  style={{color:"#000"}}></i>
            <input type="text" name="usuario" autoComplete="username" placeholder="Username" required="yes"/>
          </div>
          <div className="input-field">
            <i className="fa fa-envelope"  style={{color:"#000"}}></i>
            <input type="email" autoComplete="email" placeholder="Email" required="yes"/>
          </div>
          <div className="input-field">
            <i className="fa fa-lock"  style={{color:"#000"}}></i>
            <input type="password" name="contraseña" autoComplete="current-password" placeholder="Password" id="id_reg" required="yes"/>
            <i className="fa fa-eye" id="toggleReg" style={{cursor:"pointer",color:"#000" }}></i>
          </div>
        
          <input type="submit" value="Create account" className="btns solid" style={{fontSize: "66%",fontWeight: '700'}}/>
        
        </form>
      </div>
    </div>
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>You don't have an account?</h3>
          <p>Create your account right now to follow people and like publications</p>
          <button className="btns transparent" id="sign-up-btn">Register</button>
        </div>
        <img src="../logo.svg" className="image" alt=""/>
      </div>

      <div className="panel right-panel">
        <div className="content">
          <h3>Already have an account?</h3>
          <p>Login to see your notifications and post your favorite photos</p>
          <button className="btns transparent" id="sign-in-btn">Sign in</button>
        </div>
        <img src="../logo.svg" className="image" alt=""/>
      </div>
    </div>
    </div>

     <div className="containers">
				<div className="row">
					<div className="col-md-3">
          <img src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages7.alphacoders.com%2F990%2F990610.jpg&f=1&nofb=1" width="100%" className="mb-5 ml-2"/>
          <img src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F41%2F1%2Fhj197K.jpg&f=1&nofb=1" width="100%" className="mb-5 ml-2"/>
          <img src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages7.alphacoders.com%2F990%2F990610.jpg&f=1&nofb=1" width="100%" className="mb-5 ml-2"/>
          <img src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fjoker-2019-movie_66632_1920x1080.jpg&f=1&nofb=1"width="100%" className="mb-5 ml-2"/>
					</div>
					<div className="col-md-3">
						<div className="row">
							<div className="col-md-12">
              <img src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fjoker-stair-dance_68124_1920x1080.jpg&f=1&nofb=1" width="100%" className="mb-5"/>

							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="row">
							<div className="col-md-12">
              <img src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fjoker-2019-movie_66632_1920x1080.jpg&f=1&nofb=1" width="100%" className=""/>

							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="row">
							<div className="col-md-12">
              <img src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2F2%2F6%2F8%2F123320-lord-of-the-rings-background-1920x1080-picture.jpg&f=1&nofb=1" width="100%"className="mb-5 mr-5"/>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
    <FooterOuter />
    </>
  );
};

export default Login;
