import Menu from '../src/components/Menu'
import Header from '../src/components/Header'
import TimeLine from '../src/components/Timeline'

import { CSSReset } from '../src/components/CSSReset'
import config from '../config.json'

function HomePage() {
  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>
        <Menu />
        <Header />
        <TimeLine playlist={config.playlists} />
      </div>
    </>
  )
}

export default HomePage