import { UsersItem } from '../components/UsersItem';
import { Loading } from '../components/UI/Loading';
import { useCount } from '../hooks/useCount';
import { useContext } from "react";
import { Context } from '../functions/context';

export const Users = () => {
  const { res: { response } } = useContext(Context);
  const counter = useCount(response);

  return (
    <div className="users">
      <div className="header-block">
        <h2 className="title">Список пользователей</h2>
      </div>
      <ul className="users__list">
        {response ?
          response.map((item) => (
            <UsersItem key={item.id} {...item} />))
          : Array(3).fill(0).map((_, index) => <Loading key={index} />)}
      </ul>
      <div className="users__count">Найдено {counter.count} пользователей</div>
    </div>
  )
}