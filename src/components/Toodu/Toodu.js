import React, { Component } from "react";
import './Toodu.css';

class Toodu extends Component {
   state = {
      isEdit: true,
      text1: "",
      editId: "",
   };

   onChangeTwo = (e) => {
      e.preventDefault();
      this.setState({
         text1: e.target.value,
      });
   };

   onSubmet = (item) => {
      const newedit = this.props.props.data.data.filter((el) => el.id === item.id);
      this.setState({
         text1: newedit[0].task,
         editId: newedit[0].id,
         isEdit: false,
      });
   };
   onSave = () => {
      this.props.props.onEdit(this.state.text1, this.state.editId);
      this.setState({
         isEdit: true,
         text1: "",
         editId: "",
      });
   };
   onCancel = () => {
      this.setState({
         isEdit: true,
         text1: "",
         editId: "",
      });
   };

   render() {
      //   console.log(this.props);
      return (
         <div className="my-4 toodu">
            <div className="form-check d-flex text-align-center">
               <input
                  className="form-check-input p-3 me-4"
                  type="checkbox"
                  value=""
                  checked={this.props.item.check}
                  onChange={() => this.props.props.onCheck(this.props.item.id)}
                  id={"flexCheckDefault" + this.props.item.id}
               />
               <h3 className="">

                  {this.state.isEdit ? <p>{this.props.item.task}</p> : <input className="py-1 px-2 shadow rounded" type="text" onChange={this.onChangeTwo} value={this.state.text1} />}
               </h3>
            </div>
            {this.state.isEdit ? (
               <button onClick={() => this.onSubmet(this.props.item)} className="btn btn-success me-1 px-5 py-1" type="submit">
                  Edit
               </button>
            ) : (
               <button onClick={this.onCancel} className="btn btn-secondary px-5 py-1 me-1 cancel" type="submit">
                  Сancel
               </button>
            )}
            {this.state.isEdit ? (
               <button onClick={() => this.props.props.onDelete(this.props.item.id)} className="btn btn-danger px-5 py-1" type="submit">
                  Delete
               </button>
            ) : (
               <button onClick={this.onSave} className="btn btn-primary px-5 py-1" type="submit">
                  Save
               </button>
            )}
         </div>
      );
   }
}

export default Toodu;
