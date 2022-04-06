import PropTypes from "prop-types"; //type impt for shortcut

function Header({ text }) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
};

//more robust
Header.propTypes = {
  //Header.propTypes 小写p
  text: PropTypes.string, //: PropTypes.string 大写P
  // text: PropTypes.string.isRequired()
};

export default Header;
