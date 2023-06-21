import React from 'react';
import './Welcome.css'


const Welcome = () => {
    return(
        <div className='container-fluid custom-jumbo'>
                <div className="jumbotron container">
                    <h1 className="display-4">WELCOME</h1>
                    <p className="lead">Pick one read.</p>
                    <hr className="my-4"></hr>
                    <p>A voi la scelta.</p>
                </div>
            </div>
    )
}

export default Welcome;

/* class Welcome extends Component {
    render() {
        return (
            
        )
    }
}

export default Welcome; */