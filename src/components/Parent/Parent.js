import React, { Component } from "react";
import Toodu from "../Toodu/Toodu";

class Parent extends Component {
   state = {
      activ: true,
   };

   onCompletedOpen = () => {
      console.log("sssss");
      this.props.onCompleted();
      this.setState({
         activ: false,
      });
   };

   onAllOpen = () => {
      this.props.onAll();
      this.setState({
         activ: true,
      });
   };
	onActivOpen = () => {
		this.props.onActiv();
		this.setState({
		   activ: false,
		});
   }

   render() {
      //    console.log(this.props.data)
      //   console.log(this.props);

      return (
         <div>
            <div className="box my-4">
               <button className="w-25 py-1 btn btn-info" type="submit" onClick={this.onAllOpen}>
                  All
               </button>
               <button className="w-25 mx-3 py-1 btn btn-info" type="submit" onClick={this.onActivOpen}>
                  Active
               </button>
               <button className="w-25 py-1 btn btn-info" type="submit" onClick={this.onCompletedOpen}>
                  Completed
               </button>
            </div>

            {this.state.activ ? (
               <div className="block mx-5">
                  <h3 className="text-start">{this.props.data.data.length} tasks remaining</h3>
                  {this.props.data.data.map((item, i) => {
                     return (
                        <div key={item.id}>
                           <Toodu item={item} props={this.props} />
                        </div>
                     );
                  })}
               </div>
            ) : (
               <div className="block mx-5">
                  <h3 className="text-start">{this.props.data.dataCom.length} tasks remaining</h3>
                  {this.props.data.dataCom.map((item, i) => {
                     return (
                        <div key={item.id}>
                           <Toodu item={item} props={this.props} />
                        </div>
                     );
                  })}
               </div>
            )}

         </div>
      );
   }
}

export default Parent;
