import React from 'react';

//REDUX
import { connect } from 'react-redux';
import { actions } from '../redux/actions';

//API
import { searchWordsAPI } from '../api';

class RandomWord extends React.Component {
    constructor(){
        super();
        
        this.getRandomWord = this.getRandomWord.bind(this);
    }

    //call random word api, return single word, set to global state
    getRandomWord(){
        searchWordsAPI()
        .then(randomWord => {this.props.onSetRandomWord(randomWord.word)});
    }

    componentDidMount(){
        //run word search
        this.getRandomWord();
    }

    render(){
        return(
            <div>
                <h3>The word is...</h3>
                <h2>{ this.props.randomWord }</h2>
            </div>
        )
    }   
}


//REDUX STATE MAP
function mapStateToProps(state){
    return {
        randomWord: state.randomWord
    };
}

//REDUX ACTIONS MAP
function mapDispatchToProps(dispatch){
    return{
        onSetRandomWord(randomWord){
            dispatch(actions.setRandomWord(randomWord));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomWord);