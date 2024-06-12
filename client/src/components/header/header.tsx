import {Link, useNavigate} from 'react-router-dom';
import {Avatar, Button} from '@mantine/core';

import {ReactComponent as Logo} from '../../assets/apparts-logo.svg';

import classes from './header.module.css';

export const Header = () => {
  const navigate = useNavigate();

  const isLoggedIn = false;

  return (
    <header className={classes.wrapper}>
        <div className={classes.logo}>
          <Logo className={classes.logoIcon} />
          <div className={classes.logoTitle}>
            Move in
          </div>
        </div>

        <div className={classes.navbar}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/agents">Agents</Link>
        </div>
        
        <div className={classes.user}>
          {isLoggedIn ? (
            <>
              <Avatar
                size={32}
                // src={item.avatar} //temp
                radius={32}
              />
              <div className={classes.userName}>
                Jojo Diaz
              </div>
            </>
          ) : (
            <Button
              className={classes.authButton}
              radius="sm"
              onClick={() => {
                navigate('/login');
              }}
            >
              Login
            </Button>
          )
          }
        </div>
    </header>
  );
}