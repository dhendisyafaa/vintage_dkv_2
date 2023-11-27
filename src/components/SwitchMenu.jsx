const SwitchMenu = (props) => {
  return (
    <button
      onClick={() => props.showMenu(props.menu)}
      className={props.Menu === props.menu ? 'menu-show' : 'menu-hide '}
    >
      <img src={props.img} alt="" className="w-5 h-5" />
    </button>
  );
};
export default SwitchMenu;
