import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
  } ;
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // console.log('the returned data from youtube is', videos)
      this.setState( {
        videos: videos,
        selectedVideo: videos[0]
      } );
      // In ES6 this will be the same as
      // this.setSate({videos: videos})
      // this only works when the key and the property are the same
    })
  }
  render () {
    return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}
            />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
