import { Button } from './UI/Button';
import { useContext } from "react";
import { Context } from '../functions/context';

const sortItems = [
  { name: 'по городу', value: 'address.city' },
  { name: 'по компании', value: 'company.name' }
];

export const Sorting = () => {
  const { sort: { setSorted } } = useContext(Context);

  return (
    <div className="sorting">
      <h2 className="title sorting__title">Сортировка</h2>
      <ul className="sorting__buttons">
        {sortItems.map((item, index) => (
          <li key={`${item.value}_${index}`} >
            <Button
              onClick={() => setSorted(item.value)}
              type="button">
              {item.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}