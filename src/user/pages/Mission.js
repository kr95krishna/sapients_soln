  import React , {Component} from 'react';
  import MissionList from '../components/MissionList';

  export default class Abc extends Component {
    state = {
      loading : true,
      mission : null
    };
    async componentDidMount() {
      const url = "https://api.spacexdata.com/v3/launches?limit=100";
      const response = await fetch(url);
      const data = await response.json();
    //   console.log(data[0].flight_number);
       // console.log(data.results[0]);
     this.setState({mission: data, loading: false});
     console.log(this.state.mission);
    }
    render(){
      return(
        <div>
         {this.state.loading || !this.state.mission ? (
            <div>loading..</div> 
          ) : ( 
            <div>
             <div> <MissionList items = {this.state.mission} /> </div>
         </div>
          )}
          </div>
      );
    }
  }
