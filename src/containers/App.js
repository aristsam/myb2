import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import Errorb from "../components/Errorb";
import "./App.css";



class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ""
		}
	}

	componentDidMount() {
	fetch("https://jsonplaceholder.typicode.com/users")
	.then(response=> response.json())
	.then(users=>this.setState({robots:users}));
			}

	
		onsearchchange= (event) => {
			this.setState({searchfield: event.target.value})
	
			
			
		}
	

	render() {
		const {robots,searchfield}=this.state;
				const filterrobots = robots.filter(robot => {
				return robot.name.toLowerCase().includes(searchfield.toLowerCase());
				})
			return	!robots.length ?
					 <h1>Loading</h1>:
				
	(
		<div className="tc">
		<h1 className="f1">robofriends</h1>
		<Searchbox searchchange={this.onsearchchange} />
		<Scroll>
		<Errorb>
		 <Cardlist robots={filterrobots}/>
		 </Errorb>
		 </Scroll>
		 </div>
		);}
		
}

export default App;




