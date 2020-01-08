import React from 'react';
import './App.css';
import Header from  './components/Header'
import Main from "./components/Main";
import Footer from  './components/Footer'
import Sidebar from "./components/Sidebar";
import {List} from "./components/List";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {ItemDetail} from "./components/ItemDetail";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
        this.getData();
    }
    getData = () => {
        fetch('http://localhost:3000/data/data.json')
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({ list: data })
            })
    };

    render() {
        return (
            <div className="main">
                <Header/>
                <div className="site_content">
                    <Sidebar/>
                    <main>
                        <Router>
                            <Switch>
                                <Route exact path={"/"} component={Main} />
                                <Route exact path={"/list/"} component={ () => <List list={this.state.list} />  } />
                                <Route path={"/list/:id/"} component={ ItemDetail } />
                            </Switch>
                        </Router>
                    </main>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default App;
