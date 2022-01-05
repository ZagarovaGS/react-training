import React from 'react';
import './card.css';

export default class Card extends React.Component {
  static defaultProps = {
    avatar: '',
    title: '',
    address: '',
    price: 0,
    type: '',
    rooms: 0,
    guests: 0,
  };
  render() {
    const { id, avatar, title, address, price } = this.props;
    return (
      <div className={'card'}>
        <div className={'card-image'}>
          <img src={avatar} />
        </div>
        <div className={'card-title'}>{title}</div>
        <div className={'card-address'}>{address}</div>
        <div className={'card-price'}>{price}</div>
      </div>
    );
  }
}
