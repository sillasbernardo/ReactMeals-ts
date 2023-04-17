import './Backdrop.css';

type BackdropProps = {
  onCheckoutCartClose: () => void;
}

const Backdrop = (props: BackdropProps) => {
  return <div onClick={props.onCheckoutCartClose} className="backdrop"></div>
}

export default Backdrop;