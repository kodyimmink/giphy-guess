import React from 'react';

//REDUX
import { connect } from 'react-redux';
import { actions } from '../redux/actions';

//API
import { searchGiphyAPI } from '../api';

function cleanData(data){
    return new Promise((resolve) => {
        resolve(
            data.data.map(function(image){return image.images.original.url})
        )
    })
}

class Search extends React.Component {
    constructor(){
        super();

        this.getGiphyImages = this.getGiphyImages.bind(this);
    }


    getGiphyImages(){
        searchGiphyAPI(this.props.randomWord)
        .then(data => cleanData(data)
        .then(imagesArray => this.props.onSetImagesArray(imagesArray)
        ))
    }

    render(){
        return(
            <div>
                {(this.props.randomWord !== undefined)?
                    this.getGiphyImages()
                    : 
                    <h1>loading images...</h1>
                }
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
        onSetImagesArray(imagesArray){
            dispatch(actions.setImagesArray(imagesArray));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);