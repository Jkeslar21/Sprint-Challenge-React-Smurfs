import React, { Component } from 'react';
import Smurf from './Smurf';

class Smurfs extends Component {
    render() {
    return (
      <div className="Smurfs">
        <h1>
          Smurf Village<br/>
          <span className='subTitle' >
            #web17_gabe
          </span>
        </h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            if (smurf.id !== 0){
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
            }
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
