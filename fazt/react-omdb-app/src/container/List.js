import React, { Fragment } from 'react';
import Card from '../components/card/Card';

// llamada a API OMBD (mi key al final) : http://www.omdbapi.com/?i=tt3896198&apikey=fef7e18c
//const API = "http://www.omdbapi.com/?i=tt3896198&apikey=fef7e18c";
//hemos cargado la url del API a variables de entorno
const API = process.env.API || 'http://www.omdbapi.com/?i=tt3896198&apikey=fef7e18c';

class List extends React.Component{

    constructor(){
        super();
        this.state = {
            data: [],
            searchTerm: '',
            error: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        
        const res = await fetch(`${API}&s=batman`);
        const resJSON = await res.json();
        //console.log(resJSON);
        this.setState({
            data: resJSON.Search
        });
    }

    async handleSubmit(e){
        e.preventDefault();
        if(!this.state.searchTerm){
            return this.setState({ error: 'Please enter a valid term' });
        }

        const res = await fetch(`${API}&s=${this.state.searchTerm}`);
        const data = await res.json();
        if(!data.Search){
           return this.setState({ error: 'There are not results' });
        }
        this.setState({ data: data.Search, error: '' });
    }

    render(){
       return  (
        <Fragment>
            <div className="row">
                <div className="col-md-4 offset-md-4 p-4">
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            placeholder="Search"
                            className="form-control"
                            type="text"
                            onChange={e => this.setState({searchTerm: e.target.value})}
                            autoFocus
                        ></input>
                    </form>
                    <p className="text-white">{this.state.error || ''}</p>
                </div>
            </div>
            <div className="row">
                { this.state.data.map(movie => {
                return <Card movie={movie} key={movie.imdbID}/>;
                })}
            </div>
        </Fragment>
       );
       
    }
} 

export default List;