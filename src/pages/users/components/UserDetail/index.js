import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, updateUser } from 'application/store/actions/users';
import { selectUser } from 'application/store/reducers/users';
import FormUserData from './styles';

const UserDetail = ({ id, onRemove }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser(id)) || null;

  const [values, setValues] = useState({
    first_name: user?.first_name,
    last_name: user?.last_name,
    email: user?.email
  });

  const onDelete = async () => {
    await dispatch(deleteUser(user.id));
    onRemove();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const values = new FormData(e.target);
    const firstName = values.get('first_name');
    const lastName = values.get('last_name');
    const email = values.get('email');
    const data = { first_name: firstName, last_name: lastName, email };
    return dispatch(updateUser(user.id, data));
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return (
    user && (
      <FormUserData>
        <form onSubmit={onSubmit} onChange={onChange}>
          <input
            className="form__input name"
            type="text"
            name="first_name"
            value={values.first_name}
          />
          <input
            className="form__input lastname"
            type="text"
            name="last_name"
            value={values.last_name}
          />
          <input
            className="form__input email"
            type="text"
            name="email"
            value={values.email}
          />
          <button className="form__input-button update" type="submit">
            Update
          </button>
          <button
            className="form__input-button delete"
            type="button"
            onClick={onDelete}
          >
            Delete
          </button>
        </form>
      </FormUserData>
    )
  );
};

export default UserDetail;
