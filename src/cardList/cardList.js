import React from 'react';
import Card from '../card/card';
import './cardList.css';

export default class CadrList extends React.Component {
  static defaultProps = {
    userList: [],
  };
  render() {
    /*  const userList = [
      {
        id: 1,
        avatar: 'https://logotab.ru/storage/logotypes/124/logo052.jpg',
        title: 'bad flat',
        address: 'Moskow',
        price: 2000,
        type: 'flat',
        rooms: 2,
        guests: 4,
      },
      {
        id: 2,
        avatar: 'https://logotab.ru/storage/logotypes/124/logo052.jpg',
        title: 'great flat',
        address: 'Kazan',
        price: 1000,
        type: 'flat',
        rooms: 2,
        guests: 4,
      },
      {
        id: 3,
        avatar: 'https://logotab.ru/storage/logotypes/124/logo052.jpg',
        title: 'great flat',
        address: 'Paris',
        price: 5000,
        type: 'flat',
        rooms: 2,
        guests: 8,
      },
    ];*/
    return (
      <div className={'card-list'}>
        {this.props.userList.map((user) => {
          return (
            <div className={'card-list__item'} key={user.id}>
              <Card
                id={user.id}
                avatar={user.avatar}
                title={user.first_name}
                address={user.last_name}
                price={user.email}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
