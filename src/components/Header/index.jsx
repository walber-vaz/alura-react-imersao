import StyledHeader from './styled'

import config from '../../../config.json'

function Header() {
  return (
    <StyledHeader>
      {/* <img src="" alt="" /> */}
      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`} alt="Avatar do github" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
        Header
      </section>
    </StyledHeader>
  )
}

export default Header
