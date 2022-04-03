import { Button } from '../components/UI/Button';
import { useDisabled } from '../hooks/useDisabled';
import { useValue } from '../hooks/useValue';
import { useContext } from "react";
import { Context } from '../functions/context';

export const Profile = () => {
  const { profile: { profile } } = useContext(Context);
  const isDisabled = useDisabled();
  const isValue = useValue(profile);

  return (
    <div className="profile">
      <div className="header-block">
        <h2 className="title">Профиль пользователя</h2>
        <Button onClick={isDisabled.changeForm} type="button">Редактировать</Button>
      </div>
      <form className="form" action="#">
        <div className="form__wrapper">
          <div className="form__input-group">
            <label className="form__label">Name</label>
            <input className="form__input"
              type="text" name="name"
              onChange={isValue.changeValue}
              defaultValue={isValue.value.name}
              placeholder="Иван Иванов" required readOnly={isDisabled.active.readonly} />
          </div>
          <div className="form__input-group">
            <label className="form__label">User name</label>
            <input className="form__input"
              type="text" name="username"
              onChange={isValue.changeValue}
              defaultValue={isValue.value.username}
              placeholder="Ivan" required readOnly={isDisabled.active.readonly} />
          </div>
          <div className="form__input-group">
            <label className="form__label">E-mail</label>
            <input className="form__input"
              type="email" name="email"
              onChange={isValue.changeValue}
              defaultValue={isValue.value.email}
              placeholder="example@mail.com" required readOnly={isDisabled.active.readonly} />
          </div>
          <div className="form__input-group">
            <label className="form__label">Street</label>
            <input className="form__input"
              type="text" name="street"
              onChange={isValue.changeValue}
              defaultValue={isValue.value.street}
              placeholder="ул. Пример" required readOnly={isDisabled.active.readonly} />
          </div>
          <div className="form__input-group">
            <label className="form__label">City</label>
            <input className="form__input"
              type="text" name="city"
              onChange={isValue.changeValue}
              defaultValue={isValue.value.city}
              placeholder="Москва" required readOnly={isDisabled.active.readonly} />
          </div>
          <div className="form__input-group">
            <label className="form__label">Zip code</label>
            <input className="form__input"
              type="text" name="zipcode"
              onChange={isValue.changeValue}
              defaultValue={isValue.value.zipcode}
              placeholder="1234234" required readOnly={isDisabled.active.readonly} />
          </div>
          <div className="form__input-group">
            <label className="form__label">Phone</label>
            <input className="form__input"
              type="tel" name="phone"
              onChange={isValue.changeValue}
              defaultValue={isValue.value.phone}
              placeholder="89991112233" required readOnly={isDisabled.active.readonly} />
          </div>
          <div className="form__input-group">
            <label className="form__label">Website</label>
            <input className="form__input"
              type="url" name="website"
              onChange={isValue.changeValue}
              defaultValue={isValue.value.website ? `http://www.${isValue.value.website}` : ''}
              placeholder="http://www.example.com" required readOnly={isDisabled.active.readonly} />
          </div>
          <div className="form__input-group">
            <label className="form__label">Comment</label>
            <textarea className="form__comment"
              type="text" name="comment"
              onChange={isValue.changeValue}
              value={isValue.value.comment}
              readOnly={isDisabled.active.readonly}></textarea>
          </div>
        </div>
        <Button send type="submit" disabled={isDisabled.active.disabled}>Отправить</Button>
      </form>
    </div>
  )
}