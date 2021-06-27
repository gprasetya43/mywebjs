import React, { Component } from 'react';
import './todo.css';

class Halaman1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: localStorage.list ? JSON.parse(localStorage.list) : []
    }
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });

      localStorage.setItem('list', JSON.stringify(list));
    }
  }


  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({ list: updatedlist });

    localStorage.setItem('list', JSON.stringify(updatedlist));
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div className="all">
        <h1 className="app-title">To do List</h1>
        <center><div className="container">
          <input
            type="text"
            className="input-text"
            placeholder="Apa yang ingin anda lakukan?"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)} />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}>Add ToDo</button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="idDone"
                      defaultChecked={item.isDone}
                      onChange={() => this.state.newItem}

                    />
                    {item.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                    >Hapus</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div></center>

      </div>
    );
  }



}

export default Halaman1;
