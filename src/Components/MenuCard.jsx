import React, { useState } from 'react';
import '../Pages/Home.css';
import gal3 from '../Images/gal3.JPG';

const MenuCard = ({menuItems, heading}) => {


    return (
        <div className='menu-card' style={{ display: 'flex' }}>
            <div className="imgSection">
                <img src={gal3} alt="" />
            </div>
            <div className="bodyContent">
                <p>{heading}</p>
                <div className="ques1">
                    <ul>
                        {menuItems && menuItems.map((item, index) => (
                            <li key={index}>{item.ques1}</li>
                        ))}
                    </ul>
                    <ul>
                        {menuItems && menuItems.map((item, index) => (
                            <li key={index}>{item.ans1}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuCard;
