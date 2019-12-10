import React from 'react'
import {Component} from 'react'

class WhoWeHelpFoundations extends Component{
    state = {
      foundations: ['Fundacja Lorem Ipsum 1', 'Fundacja Lorem Ipsum 2', 'Fundacja Lorem Ipsum 3',
          'Fundacja Lorem Ipsum 4', 'Fundacja Lorem Ipsum 5', 'Fundacja Lorem Ipsum 6', 'Fundacja Lorem Ipsum 7',
          'Fundacja Lorem Ipsum 8', 'Fundacja Lorem Ipsum 9'],
      foundationsPerPage: 3,
      currentPage: 1
    };
    handleClick =(e, i)=> {
        this.setState({currentPage: i})
    };
    render() {
        const {foundations, foundationsPerPage, currentPage} = this.state;
        const indexOfLast = foundationsPerPage * currentPage;
        const indexOfFirst = indexOfLast - foundationsPerPage;
        const currentFoundations = foundations.slice(indexOfFirst, indexOfLast);
        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(foundations.length/foundationsPerPage); i++) {
            pageNumbers.push(<div key={i} onClick={e => this.handleClick(e, i)} className={currentPage === i&& 'active'}>{i}</div>)
        }
        return (
            <div className='homeWhoWeHelpFoundations' style={this.props.style}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className='homeWhoWeHelpFoundations__foundations'>
                {
                    currentFoundations.map((foundation, i) => {
                        return <div key={i}>{foundation}</div>
                        }
                    )
                }
                </div>
                <div className='homeWhoWeHelpFoundations__pages'>
                    {pageNumbers}
                </div>
            </div>
        )
    }
}

export default WhoWeHelpFoundations;
