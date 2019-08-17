import React from 'react';

//REDUX
import { connect } from 'react-redux';
import { actions } from '../redux/actions';

class Images extends React.Component {
    constructor(){
        super();

        this.createImageElements = this.createImageElements.bind(this);
    }

    
    createImageElements(){
        console.log(this.props.imagesArray)
        return (
            <div className='imageContainer'>
                {
                    this.props.imagesArray.map( 
                        (image, index) => { return (
                        <div key={image.concat(index)}>
                            <img className='image' width={300} height={300} src={image} /> 
                        </div>
                        )
                        }
                    )
                }
            </div>
        )
    }

    render(){
        return(
            <div>
                {
                    (this.props.haveImageData === true) ?
                        this.createImageElements() : <h3> ... </h3>
                }
                
            </div>
            
        )
    }

}

//REDUX STATE MAP
function mapStateToProps(state){
    return {
        imagesArray: state.imagesArray,
        haveImageData: state.haveImageData
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

export default connect(mapStateToProps, mapDispatchToProps)(Images);

