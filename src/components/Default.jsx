import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NotFound } from "./styledElements/elements";

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <NotFound>
        <div className="col-10 mx-auto my-2 text-left">
          <p className="text-muted font-weight-bold mb-3" id="fof">
            <i className="fa fa-meh-o mr-2" aria-hidden="true"></i>404, Not
            Found!
          </p>
          <h6>
            The requested URL:
            <span className="text-danger ml-1 mr-1">
              {this.props.location.pathname}
            </span>
            was not found on this server.
          </h6>
          <h6>
            Return to
            <Link to="/">
              <span id="to-home" className="ml-1">
                homepage
              </span>
            </Link>
            .
          </h6>
        </div>
      </NotFound>
    );
  }
}
