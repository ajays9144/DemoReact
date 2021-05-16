import React, { Component } from 'react'
import Card from './Card';
import Filter from './Filter';
import Sdata from './Sdata';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filterId: 1
        }
    }

    getFilter = (id) => {
        this.setState({
            filterId: id
        });
    }

    getCards() {
        const cards = [];
        Sdata.map((val) => {
            if (this.state.filterId == 2) {
                if (val.filter_id == 2) {
                    cards.push(<Card key={val.id} imgsrc={val.imgsrc} title={val.title}
                        sname={val.sname} link={val.links} />);
                }
            } else if (this.state.filterId == 3) {
                if (val.filter_id == 3) {
                    cards.push(<Card key={val.id} imgsrc={val.imgsrc} title={val.title}
                        sname={val.sname} link={val.links} />);
                }
            } else {
                cards.push(<Card key={val.id} imgsrc={val.imgsrc} title={val.title}
                    sname={val.sname} link={val.links} />);
            }
        });
        return cards;
    }


    render() {
        return (
            <div>
                <h1 className="heading_style">List of top Series in Online Platform</h1>
                {<Filter sendData={this.getFilter} />}
                <div className="grid-container">
                    {this.getCards()}
                </div>
            </div>
        )
    }
}

export default App;