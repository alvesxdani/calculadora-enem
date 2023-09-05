import PropTypes from 'prop-types'

const Header = ({ ano }) => {
    return (
        <header className='w-[100%] bg-blue text-white p-5 mb-3 flex justify-center'>
            <div className='flex justify-between w-[80%]'>
                <h1 className='font-bold font-montserrat text-xl'>Calculadora Enem {ano}</h1>
                <nav>
                    <ul>
                        <li className='text-white'>
                            <a href="/">Início</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

Header.propTypes = {
    ano: PropTypes.number,
}

export default Header