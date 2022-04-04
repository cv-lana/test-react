import { Button } from '../components/UI/Button';
import { useDisabled } from '../hooks/useDisabled';
import { useValue } from '../hooks/useValue';
import { useContext } from "react";
import { Context } from '../functions/context';

export const Profile = () => {
  const { profile: { profile } } = useContext(Context);
  const isDisabled = useDisabled();
  const value = useValue(profile);
  const formik = value.formik;

  return (
    <div className="profile">
      <div className="header-block">
        <h2 className="title">Профиль пользователя</h2>
        <Button onClick={isDisabled.changeForm} type="button">Редактировать</Button>
      </div>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="form__wrapper">
          <div className="form__input-group">
            <label className="form__label">Name</label>
            <input className="form__input"
              type="text"
              name="name"
              placeholder="Иван Иванов"
              readOnly={isDisabled.active.readonly}
              {...formik.getFieldProps('name')} />
            {formik.touched.name && formik.errors.name ? (<div style={{ color: 'red' }}>{formik.errors.name}</div>) : null}
          </div>
          <div className="form__input-group">
            <label className="form__label">User name</label>
            <input className="form__input"
              type="text"
              name="username"
              placeholder="Ivan"
              readOnly={isDisabled.active.readonly}
              {...formik.getFieldProps('username')} />
            {formik.touched.username && formik.errors.username ? (<div style={{ color: 'red' }}>{formik.errors.username}</div>) : null}
          </div>
          <div className="form__input-group">
            <label className="form__label">E-mail</label>
            <input className="form__input"
              type="email"
              name="email"
              placeholder="example@mail.com"
              readOnly={isDisabled.active.readonly}
              {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (<div style={{ color: 'red' }}>{formik.errors.email}</div>) : null}
          </div>
          <div className="form__input-group">
            <label className="form__label">Street</label>
            <input className="form__input"
              type="text"
              name="street"
              placeholder="ул. Пример"
              readOnly={isDisabled.active.readonly}
              {...formik.getFieldProps('street')} />
            {formik.touched.street && formik.errors.street ? (<div style={{ color: 'red' }}>{formik.errors.street}</div>) : null}
          </div>
          <div className="form__input-group">
            <label className="form__label">City</label>
            <input className="form__input"
              type="text"
              name="city"
              placeholder="Москва"
              readOnly={isDisabled.active.readonly}
              {...formik.getFieldProps('city')} />
            {formik.touched.city && formik.errors.city ? (<div style={{ color: 'red' }}>{formik.errors.city}</div>) : null}
          </div>
          <div className="form__input-group">
            <label className="form__label">Zip code</label>
            <input className="form__input"
              type="text"
              name="zipcode"
              placeholder="1234234"
              readOnly={isDisabled.active.readonly}
              {...formik.getFieldProps('zipcode')} />
            {formik.touched.zipcode && formik.errors.zipcode ? (<div style={{ color: 'red' }}>{formik.errors.zipcode}</div>) : null}
          </div>
          <div className="form__input-group">
            <label className="form__label">Phone</label>
            <input className="form__input"
              type="tel"
              name="phone"
              placeholder="89991112233"
              readOnly={isDisabled.active.readonly}
              {...formik.getFieldProps('phone')} />
            {formik.touched.phone && formik.errors.phone ? (<div style={{ color: 'red' }}>{formik.errors.phone}</div>) : null}
          </div>
          <div className="form__input-group">
            <label className="form__label">Website</label>
            <input className="form__input"
              type="url"
              name="website"
              placeholder="http://example.com"
              readOnly={isDisabled.active.readonly}
              {...formik.getFieldProps('website')} />
            {formik.touched.website && formik.errors.website ? (<div style={{ color: 'red' }}>{formik.errors.website}</div>) : null}
          </div>
          <div className="form__input-group">
            <label className="form__label">Comment</label>
            <textarea className="form__comment"
              type="text"
              name="comment"
              readOnly={isDisabled.active.readonly}
              {...formik.getFieldProps('comment')}></textarea>
          </div>
        </div>
        <Button send type="submit" disabled={isDisabled.active.disabled}>Отправить</Button>
      </form>
    </div>
  )
}