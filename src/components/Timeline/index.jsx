import { StyledTimeline } from './styled'

function TimeLine(props) {
  const playlistNames = Object.keys(props.playlist)

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName, index) => {
        const videos = props.playlist[playlistName]
        return (
          <section key={index}>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video, index) => {
                return (
                  <a key={index} href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}

export default TimeLine