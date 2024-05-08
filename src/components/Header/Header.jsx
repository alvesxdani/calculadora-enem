import PropTypes from "prop-types";

const Header = ({ ano }) => {
  return (
    <header className="w-[100%] bg-white text-black p-5 mb-3 flex drop-shadow-md">
      <a href="/">
        <h1 className="font-bold font-montserrat text-xl no-underline">
          Calculadora Enem {ano}
        </h1>
      </a>
      {/* <nav>
                    <ul>
                        <li className='text-white'>
                            <a href="/">Início</a>
                        </li>
                    </ul>
                </nav> */}
    </header>
  );
};

Header.propTypes = {
  ano: PropTypes.number,
};

export default Header;
