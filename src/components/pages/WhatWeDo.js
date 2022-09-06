import React from 'react';
import styles from '../../assets/styles/styles';

export default function WhatWeDo() {
    return(
        <article style={styles.container}>
        <h3>What We Do</h3>
        <p style={styles.font}>Our mission is to sustainably lower the cost of healthcare by increasing the quality of the care
            provided, and by promoting health improvement programs.</p>
        <p>Our Services</p>
        <ul>
            <li>Fair Market Valuation</li>
            <li>Health and Wellness Coaching</li>
            <li>Litigation Support</li>
            <li>Solutions for Providers</li>
            <li>Solutions for Employers/Purchasers</li>
        </ul>
    </article>
    );
}