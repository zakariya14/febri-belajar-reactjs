import React, { Component } from "react";

const Input = ({ name, type, label, onChange }) => {
  return (
    <div>
      <label className="form-label" htmlFor={name}>
        {label}:
      </label>
      <br />
      <input className="form-control" type={type} name={name} id={name} onChange={(e) => onChange(e.target.value)} />
      <br />
    </div>
  );
};

const ShowErrors = ({ errors }) => {
  const style = {
    color: "red",
    fontStyle: "italic",
    fontSize: "12px",
  };

  return errors.map((error, i) => (
    <span style={style} key={i}>
      {error} <br />
    </span>
  ));
};

class Validation extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    let message = [];

    // const alertError = () => {
    //   return (
    //     <div className="alert alert-warning alert-dismissible fade show" role="alert">
    //       Email tidak boleh kosong
    //       <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    //     </div>
    //   );
    // };

    if (email.length === 0) {
      message = [...message, "email tidak boleh kosong"];
    }

    if (password.length === 0) {
      message = [...message, "password tidak boleh kosong"];
    }

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      message = [...message, "email tidak valid"];
    }

    if (password.length < 8) {
      message = [...message, "password terlalu pendek"];
    }

    if (message.length > 0) {
      this.setState({ errors: message });
    } else {
      alert(`
        Email: ${this.state.email}
        Password: ${this.state.password}
        `);
      this.setState({
        errors: [],
      });
    }
  };

  render() {
    const style = {
      width: "400px",
      margin: "100px auto",
      padding: "10px",
      //   border: "1px solid black",
      //   borderRadius: "5px",
    };

    return (
      <div style={style}>
        <div className="row justify-content-center">
          <div className="col-md-8 form-control">
            <h4 className="text-center">Login Page</h4>
            {this.state.errors && <ShowErrors errors={this.state.errors} />}
            <form onSubmit={this.handleSubmit}>
              <Input type="email" name="email" label="Email" onChange={(value) => this.setState({ email: value })} />
              <Input type="password" name="password" label="Password" onChange={(value) => this.setState({ password: value })} />
              <button className="btn btn-sm btn-outline-success" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Validation;
