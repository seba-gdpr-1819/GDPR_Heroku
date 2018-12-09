import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAssignedDevelopers } from "../../actions/projectActions";
import {
  Panel,
  Col,
  Tabs,
  Tab,
  Button,
  Collapse,
  ListGroupItem
} from "react-bootstrap";
import EditToolbarTactics from "./EditToolbarTactics";

class DevListItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      assignedDevelopers: []
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (!this.state.bsStyle) {
      var newArray = [...this.state.assignedDevelopers];
      newArray.push(e.target.name);

      var newbsStyle = "success";

      this.setState(() => {
        this.props.setAssignedDevelopers(newArray);
        return { assignedDevelopers: newArray, bsStyle: newbsStyle };
      });
    } else {
      newArray = [this.state.assignedDevelopers];
      newArray.pop();

      newbsStyle = "";

      this.setState(() => {
        this.props.setAssignedDevelopers(newArray);
        return { assignedDevelopers: newArray, bsStyle: newbsStyle };
      });
    }
  }

  render() {
    const { developer, auth } = this.props;

    return (
      <ListGroupItem
        onClick={this.onClick}
        name={developer.name}
        bsStyle={this.state.bsStyle}
      >
        {developer.name}
      </ListGroupItem>
    );
  }
}

DevListItem.propTypes = {
  developer: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  setAssignedDevelopers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  assignedDevelopers: state.assignedDevelopers
});

export default connect(
  mapStateToProps,
  { setAssignedDevelopers }
)(DevListItem);