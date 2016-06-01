var History = require('../components/history.hbs');
var Users = require('../components/users.hbs');
var mockHistory = [
  {
    msg: '안녕하십니까? 다나까 광글입니다.',
    name: 'dalgos',
    date: '23rd June at 5:00pm',
    image: 'assets/imgs/boy-4.png'
  },
  {
    msg: '반갑습니다. 인상이 좋으시네요.',
    name: 'foundy',
    date: '23rd June at 5:10pm',
    image: 'assets/imgs/man.png'
  },
  {
    msg: '별말씀을 다 하십니다.',
    name: 'dalgos',
    date: '23rd June at 5:11pm',
    image: 'assets/imgs/boy-4.png'
  },
  {
    msg: 'Plex 서버 공유합시다.',
    name: 'foundy',
    date: '23rd June at 5:12pm',
    image: 'assets/imgs/man.png'
  },
  {
    msg: '덕이십니까?',
    name: 'dalgos',
    date: '23rd June at 5:13pm',
    image: 'assets/imgs/boy-4.png'
  }
];
var mockUsers = [
  {
    name: 'girl',
    date: 'Active From 2 hours',
    image: 'assets/imgs/girl.png'
  },
  {
    name: 'girl-1',
    date: 'Active From 2 hours',
    image: 'assets/imgs/girl-1.png'
  },
  {
    name: 'girl-2',
    date: 'Active From 2 hours',
    image: 'assets/imgs/girl-2.png'
  },
  {
    name: 'girl-3',
    date: 'Active From 2 hours',
    image: 'assets/imgs/girl-3.png'
  },
  {
    name: 'girl-4',
    date: 'Active From 2 hours',
    image: 'assets/imgs/girl-4.png'
  },
  {
    name: 'girl-5',
    date: 'Active From 2 hours',
    image: 'assets/imgs/girl-5.png'
  },
  {
    name: 'girl-6',
    date: 'Active From 2 hours',
    image: 'assets/imgs/girl-6.png'
  },
  {
    name: 'girl-7',
    date: 'Active From 2 hours',
    image: 'assets/imgs/girl-7.png'
  }
];

document.getElementById('_history').innerHTML = History(mockHistory);
document.getElementById('_users').innerHTML = Users(mockUsers);
