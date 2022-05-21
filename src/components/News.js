import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultpProps = {
    country: "us",
    category: "sports",
    pageSize: 9,
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };
  articles = [];
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capitalize(this.props.category)} - PandaNews` ;
  }
   capitalize=(str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);}
    
   async componentDidMount() {
     this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(10);
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);

  }

  fetchMoreData = async () => {
      this.setState({page : this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles) ,
      totalResults: parsedData.totalResults,
      loading:false
    }); 
  };
  
  render() {
    return (
      <>
        
          <h1 className="text-center" style={{ margin: "35px 0px" }}>Panda News - Top {this.capitalize(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
       >
        <div className="container">
          <div className="row">
          { this.state.articles.map((element,index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}</div>
        </div>
        </InfiniteScroll>
    
          </> );
  }
}
export default News;
