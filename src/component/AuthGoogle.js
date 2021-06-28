import React, { useEffect, useState } from "react";

class AuthGoogle extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: null,
    };
  }

  // const [user, setUser] = useState({ isSignIn: null });
  // console.log(user);
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "441818850146-rpfqp7lj4ucl8a5jh5fpj2c3dup7m282.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.setState({ isSignedIn: this.auth.isSignedIn.get() });

          // setUser(this.auth.isSignedIn.get());
        });
    });
  }
  render() {
    console.log(this.state.isSignedIn);
    const listrender = () => {
      if (this.state.isSignedIn === null) {
        return <span>I don't know if we are signed in</span>;
      } else if (this.state.isSignedIn) {
        return <span>Hey I am signed in</span>;
      } else {
        return <span>I am not signed in</span>;
      }
    };
    return <div>{listrender()}</div>;
  }
}
// render() {
//   render = () => {
//     if (user.isSignIn === null) {
//       return <span>I don't know if we are signed in</span>;
//     } else if (user.isSignIn) {
//       return <span>Hey I am signed in</span>;
//     } else {
//       return <span>I am not signed in</span>;
//     }
//   };

export default AuthGoogle;

// import React, { useEffect } from "react";

// const AuthGoogle = () => {
//   useEffect(() => {
// window.gapi.load("client:auth2", () => {
//   window.gapi.client
//     .init({
//       clientId:
//         "441818850146-rpfqp7lj4ucl8a5jh5fpj2c3dup7m282.apps.googleusercontent.com",
//       scope: "email",
//     })
//     .then(() => {
//       this.auth = window.gapi.auth2.getAuthInstance();
//       console.log(this.auth.isSignedIn.get());
//       this.setState({ isSignedIn: this.auth.isSignedIn.get() });
//       // setUser(this.auth.isSignedIn.get());
//     });
// });
//     function init() {
//       window.gapi.load("auth2", function () {
//         clientId: "441818850146-rpfqp7lj4ucl8a5jh5fpj2c3dup7m282.apps.googleusercontent.com";
//       });
//     }
//   });
//   return <div>helllow</div>;
// };

// export default AuthGoogle;
