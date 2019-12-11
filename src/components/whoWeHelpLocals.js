import React from 'react'
import {Component} from 'react'

class WhoWeHelpLocals extends Component{
    state = {
        locals: ['Zbiórka Lorem Ipsum 1', 'Zbiórka Lorem Ipsum 2', 'Zbiórka Lorem Ipsum 3'],
        localsPerPage: 3,
        currentPage: 1
    };
    handleClick =(e, i)=> {
        this.setState({currentPage: i})
    };
    render() {
        const {locals, localsPerPage, currentPage} = this.state;
        const indexOfLast = localsPerPage * currentPage;
        const indexOfFirst = indexOfLast - localsPerPage;
        const currentLocals = locals.slice(indexOfFirst, indexOfLast);
        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(locals.length/localsPerPage); i++) {
            pageNumbers.push(<div key={i} onClick={e => this.handleClick(e, i)} className={currentPage === i&& 'active'}>{i}</div>)
        }
        return (
            <div className='homeWhoWeHelpLocals' style={this.props.style}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className='homeWhoWeHelpLocals__locals'>
                    {
                        currentLocals.map((local, i) => {
                                return <div key={i}>{local}</div>
                            }
                        )
                    }
                    <div className='homeWhoWeHelpLocals__pages'>
                        {pageNumbers}
                    </div>
                </div>
            </div>
        )
    }
}

export default WhoWeHelpLocals;

