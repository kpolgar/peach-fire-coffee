import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions'

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss'

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
    <div className = 'collection-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}   
        />
        <div className='collection-footer'>
            <span className='name'>{ name }</span>
            <span className='price'>{ price }</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted> Add to Cart </CustomButton>
    </div>
)}
//we are creating an addItem function that receives the item as a property, pass it into addItem
//action creator, which gives us back that object where the prop is equal
//to add item and the payload is equal to the item that got passed in, and then we will
//dispath that new object into our store
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
