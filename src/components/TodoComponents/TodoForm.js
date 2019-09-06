import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      itemName: ""
    };
  }

  handleChange = e => {
    this.setState({ itemName: e.target.value });
  };

  render() {
    return (
      <form
        onSubmit={e => {
          this.props.handleSubmit(e, this.state.itemName);
          this.setState({ itemName: "" });
        }}
      >
        <input
          type="text"
          name="itemText"
          placeholder="Enter a new item..."
          onChange={this.handleChange}
          value={this.state.itemName}
        />
        <button type="submit" name="submit">
          Add Item
        </button>
      </form>
    );
  }
}

export default TodoForm;
