import {Link} from 'react-router-dom';
import {Button, PasswordInput, TextInput} from '@mantine/core';
import {useForm, isEmail, hasLength} from '@mantine/form';

import {useAppDispatch, useAppSelector} from '../../store/hooks';

import classes from './register.module.css';
import { registerUser } from '../../store/slices/auth-slice/auth-slice-thunks';
import { selectAuthError } from '../../store/slices/auth-slice/auth-slice-selectors';

export const Register = () => {
  const dispatch = useAppDispatch();

  const error = useAppSelector(selectAuthError);
  console.log('error=', error);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      email: '',
      password: '',
    },

    validate: {
      username: hasLength({ min: 3 }, 'Must be at least 3 characters'),
      email: isEmail('Invalid email'),
      password: hasLength({ min: 3 }, 'Must be at least 3 characters'),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    // const {username, email, password} = values;

    console.log('values=', values);

    // const formData = new FormData();
    // formData.append('username', username);
    // formData.append('email', email);
    // formData.append('password', password);

    // console.log('formData=', formData);

    dispatch(registerUser(values));
  }
  
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>
        Create an Account
      </h1>

      <form
        className={classes.form}
        onSubmit={form.onSubmit(handleSubmit)}
      >
        <TextInput
          classNames={{
            root: classes.field,
            label: classes.label,
          }}
          key={form.key('username')}
          {...form.getInputProps('username')}
          label="Username"
          placeholder="my_user111"
        />
        <TextInput
          classNames={{
            root: classes.field,
            label: classes.label,
          }}
          key={form.key('email')}
          {...form.getInputProps('email')}
          label="Email"
          placeholder="your@mail.com"
        />
        <PasswordInput
          classNames={{
            root: classes.field,
            label: classes.label,
          }}
          key={form.key('password')}
          {...form.getInputProps('password')}
          label="Password"
          placeholder="******"
        />

        <Button
          className={classes.submitButton}
          type="submit"
        >
          Register
        </Button>
        <Link
          className={classes.link}
          to="/login"
        >
          Already have an account?
        </Link>
      </form>
    </div>
  );
};
