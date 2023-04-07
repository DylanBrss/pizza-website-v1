import React from 'react';
import { FeatureBtn, FeatureContainer } from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the day</h1>
            <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
            <FeatureBtn>Order Now</FeatureBtn>
        </FeatureContainer>
    );
};

export default Feature;