import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Login.scss';

const propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    created: PropTypes.string,
  })),
};
const defaultProps = {
  users: [
    {
      id: 1,
      name: 'user 1',
      created: moment('2018-01-01').format('YYYY-MM-DD'),
    },
    {
      id: 2,
      name: 'user 2',
      created: moment('2018-01-02').format('YYYY-MM-DD'),
    },
    {
      id: 3,
      name: 'user 3',
      created: moment('2018-01-03').format('YYYY-MM-DD'),
    },
    {
      id: 4,
      name: 'user 4',
      created: moment('2018-01-04').format('YYYY-MM-DD'),
    },
    {
      id: 5,
      name: 'user 5',
      created: moment('2018-01-05').format('YYYY-MM-DD'),
    },
  ],
};

class Login extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <ul className="Login__user-set">
        <h4 className="Login__user-title">유저 리스트</h4>
        {users.map(user => (
          <li
            className="Login__user"
            key={user.id}
          >
            {user.name}
          </li>
        ))}
      </ul>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
