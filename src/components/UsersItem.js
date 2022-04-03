import { Link } from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../functions/context';

export const UsersItem = (props) => {
  const { profile: { setProfile } } = useContext(Context);

  return (
    <li className="users__item">
      <div className="users__info">
        <p className="users__name">
          ФИО:
          <span className="users__name-desc">{props.name}</span>
        </p>
        <p className="users__city">
          город:
          <span className="users__city-desc">{props.address.city}</span>
        </p>
        <p className="users__company">
          компания:
          <span className="users__company-desc">{props.company.name}</span>
        </p>
      </div>
      <Link className="users__link" to="/profile" onClick={() => setProfile(props)}>Подробнее</Link>
    </li>
  )
}