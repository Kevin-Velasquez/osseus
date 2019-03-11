import React from 'react';
import { Link } from 'react-router-dom';
import store from '../../redux/store/index';
import { addArticle } from "../../redux/actions/index";
import '../../styles_CSS/Project-Selection/Dropdown.css';

let flip = true;

class Dropdown extends React.Component {
  constructor(){
    super();
    this.state = {
      displayMenu: false,
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
  };

  showDropdownMenu(event) {
    flip = !flip;
    event.preventDefault();
    this.setState({ displayMenu: !flip });
  }

  setFlip() { flip = true; }

  showMe() { 
    store.dispatch( addArticle({ name: 1, id: 1 }) )
    store.dispatch( addArticle({ name: 12, id: 2 }) )
    console.log(store.getState().articles[0]); 
  }

  //The logic of how this dropdown works is that the list is
  //shown and hidden based on the click of the dropdown button.
  //  
  render() {
    return (
      <div  className="dropdown" onLoad={this.setFlip} style = {{background:"red",width:"200px"}} >
	      <div className="button" onClick={this.showDropdownMenu}> Saved Projects </div>
          { this.state.displayMenu ? (
            <ul>
    		      <li><Link onClick={this.showMe} to="/PluginApp">Project 1</Link></li>
    		      <li><Link to="/PluginApp">Project 2</Link></li>
    		      <li><Link to="/PluginApp">Project 3</Link></li>
            </ul>
            ) : ( null )
          }
      </div>
    );
  }
}
export default Dropdown;
