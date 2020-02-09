import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="row">
        <nav className="navbar col-12" >
          <span className="navbar-text font-weight-bold">
            {this.props.name}
          </span>
        </nav>
      </div>
    )
  }
}

export default Header;
