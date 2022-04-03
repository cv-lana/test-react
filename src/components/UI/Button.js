export const Button = ({ children, send, ...props }) => {

  return (
    <button
      className={`${send ? 'button form__button' : 'button'}`}
      {...props}>
      {children}
    </button>
  )
}