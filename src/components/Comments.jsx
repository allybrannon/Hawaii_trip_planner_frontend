import React, { Component } from "react";
import { Link } from "react-router-dom";

class Comments extends Component {
  state = {
    comments: [],
  };

  async getInfo() {
    const response = await fetch("http://localhost:3000/all");
    const data = await response.json();
    console.log("returned: ", data);
    return data;
  }

  async componentDidMount() {
    const apiblog = await this.getInfo();
    this.setState({
      blog: apiblog,
    });
  }

  render() {
    const { info } = this.state;
    console.log("comments:", info);
    return (
      <div>
        <ul>
          {info.length > 0 ? (
            info.map((info) => (
              <li key={info.id}>
                <br />
                <Link className="links" to={`/all/${info.id}`}>
                  {info.user_name} {info.comment} {info.user_email}
                </Link>
              </li>
            ))
          ) : (
            <li>No Data</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Comments;
