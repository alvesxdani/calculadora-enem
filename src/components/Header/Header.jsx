import PropTypes from 'prop-types'

const Header = ({ano}) => {
  return (
    <header className='w-[100%] bg-blue text-white flex p-4 justify-between mb-3'>
        <h1 className='font-bold font-montserrat text-xl'>Calculadora Enem {ano}</h1>
        <nav>
            <ul>
                <li className='text-white'>
                    <a href="/">Início</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

Header.propTypes = {
    ano: PropTypes.number,
}

export default Header