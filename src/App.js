import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {

    state={
      progress:0
    }

    setProgress = (progress)=>{
      this.setState({
       progress:progress
      })
    }
    apiKey=process.env.REACT_APP_NEWS_API

  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar height={3} color='#f11946' progress={this.state.progress}  />
        <Routes>
        <Route path='/'        element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="home" pageSize={9} country='us' category='general'/>} />
        <Route path='/sports'  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={9} country='us' category='sports'/>} />
        <Route path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={9} country='us' category='science'/>} />
        <Route path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={9} country='us' category='business'/>} />
        <Route path='/health'  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={9} country='us' category='health'/>} />
        <Route path='/entertainment'  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={9} country='us' category='entertainment'/>} />
        <Route path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={9} country='us' category='technology'/>} />       
       </Routes>
       </Router>
      </div>
    )
  }
}

export default App

