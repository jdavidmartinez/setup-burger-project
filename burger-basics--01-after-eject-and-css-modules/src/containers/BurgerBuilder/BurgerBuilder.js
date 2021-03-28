import React, { Component} from 'react';

import Aux from '../../hoc/Aux';

import Burger from '../../components/Layout/Burger/Burger'


class BurgerBuilder extends Component {
    //constructor(props){
    //    super(props);
    //     this.state{...};

    // }
    state = {
        ingredients:{
            salad: 3,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Control</div>
            </Aux>
        );
    }
}
export default BurgerBuilder;