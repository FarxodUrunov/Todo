import InputFil from "./components/InputFil/InputFil";
import Parent from "./components/Parent/Parent";
import React, { Component } from "react";

import "./App.css";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [],
         text: "",
         edit: true,
         dataCom: [],
         checked: false,
      };
      this.idMax = 1;
   }

   onAdd = (e) => {
      e.preventDefault();

      this.setState({
         text: e.target.value,
      });
   };

   addItem = (e) => {
      e.preventDefault();
      const newItem = {
         task: this.state.text,
         id: this.idMax++,
         check: this.state.checked,
      };

      this.setState({
         data: [...this.state.data, newItem],
         dataCom: [...this.state.dataCom, newItem],
         text: "",
         edit: true,
      });
   };

   onDelete = (id) => {
      const newDelete = this.state.data.filter((item) => id !== item.id);
      const newDeleteCom = this.state.dataCom.filter((item) => id !== item.id);
      this.setState({
         data: newDelete,
         dataCom: newDeleteCom,
         edit: true,
      });
   };

   onEdit = (text1, id) => {
      this.state.data.filter((el) => {
         if (id === el.id) {
            return (el.task = text1);
         }
         return el;
      });
      this.setState({
         //  data: [{ task: text1, id: id, check: false }, ...textUp],
         data: [...this.state.data],
      });
   };

   onCheck = (id) => {
      this.setState(({ data }) => ({
         data: data.map((item) => {
            if (id === item.id) {
               return { ...item, check: !item.check };
            }
            return item;
         }),
      }));

      this.setState(({ dataCom }) => ({
         dataCom: dataCom.map((item) => {
            if (id === item.id) {
               return { ...item, check: !item.check };
            }
            return item;
         }),
      }));
      this.setState(({ dataCom }) => ({
         dataCom: dataCom.filter((el) => id !== el.id),
      }));
   };

   onCompleted = () => {
      const newComlet = this.state.data.filter((item) => item.check === true);
      this.setState({
         dataCom: newComlet,
         checked: true,
      });
   };
   onActiv = () => {
      const newActiv = this.state.data.filter((item) => item.check === false);
      this.setState({
         dataCom: newActiv,
         checked: false,
      });
   };
   onAll = () => {
      this.setState({
         checked: false,
      });
   };

   render() {
      return (
         <div>
            <div className="App">
               <InputFil onChange={this.onAdd} value={this.state.text} onClick={this.addItem} />
               <Parent
                  data={this.state}
                  onDelete={this.onDelete}
                  onEdit={this.onEdit}
                  onCheck={this.onCheck}
                  onCompleted={this.onCompleted}
                  onActiv={this.onActiv}
                  onAll={this.onAll}
                  onChangeTwo={this.onChangeTwo}
               />
            </div>
         </div>
      );
   }
}

export default App;
