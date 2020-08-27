import React , {Component} from 'react';
import MissionList from '../../user/components/MissionList';

export default class Abc extends Component {
  state = {
    loading : true,
     mission : null
  };
  async componentDidMount() {
    const url = "https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true";
    const response = await fetch(url);
    const data = await response.json();
  //   console.log(data[0].flight_number);
     // console.log(data.results[0]);
     console.log(this.props.value);
   this.setState({mission: data});
   console.log(this.state.mission);
  }
  render(){
    return(
      <div>
       {this.state.mission && <MissionList items = {this.state.mission} />}
       </div>
    );
  }
}
