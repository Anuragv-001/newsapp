// import React, { useEffect, useState } from 'react'
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";



// const News = (props) =>  {
//     const[articles, setArticles] = useState([])
//     const[loading, setLoading] = useState(true)
//     const[page, setPage] = useState(1)
//     const[totalResults, settotalResults] = useState(0)

//     const capitalizeFirstLetter = (string) =>{
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     };

//     // constructor(props){
//     //     super(props);
//     //     // console.log("Hello i am a constructor from news component");
//     //     // this.state = {
//     //     //     articles: [],
//     //     //     loading : true,
//     //     //     page: 1,
//     //     //     totalResults: 0,
//     //     // }
//     //     // document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;
//     // }

//     const  updatenews = async ()=>{
//         props.setProgress(10);
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&pageSize=${props.pageSize}&page=${this.state.page}`;
//         // this.setState({loading: true});
//         // setLoading(true);
//         let data = await fetch(url);
//         props.setProgress(30);
//         let parsedata = await data.json();
//         props.setProgress(70);
//         // console.log(parsedata);
//         setArticles(parsedata.articles);
//         settotalResults(parsedata.totalResults);
//         setLoading(false);
//         // this.setState ({
//         //     articles : parsedata.articles,
//         //     totalResults: parsedata.totalResults,
//         //     loading: false,
//         // });
//         props.setProgress(100);
//     }

//     useEffect(() => {
//         document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;
//         updatenews();
//     }, [page])
    
//     // async componentDidMount(){
//     //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=e2fbb24fa2cc4600abb2e0eb4e944e69&pageSize=${props.pageSize}&page=1`;
//     //     // this.setState({loading: true});
//     //     // let data = await fetch(url);
//     //     // let parsedata = await data.json();
//     //     // console.log(parsedata);
//     //     // this.sfirstetState ({
//     //     //     articles : parsedata.articles,
//     //     //     totalResults: parsedata.totalResults,
//     //     //     loading: false
//     //     // });
//     // }

//     const Handlepreviousclick = async () => {
//         // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=e2fbb24fa2cc4600abb2e0eb4e944e69&page=${this.state.page-1}&pageSize=${props.pageSize}`;
//         // this.setState({loading: true});
//         // let data = await fetch(url);
//         // let parsedata = await data.json();
//         // console.log(parsedata);
//         // this.setState({ 
//         //     page: this.state.page - 1,
//         //     articles: parsedata.articles,
//         //     loading: false
//         // })
//         // this.setState({ page : this.state.page - 1});
//         setPage(page+1);
//         this.updatenews();
//     }
//     const Handlenextclick = async () =>{
//         // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))){
//         //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=e2fbb24fa2cc4600abb2e0eb4e944e69&page=${this.state.page+1}&pageSize=${props.pageSize}`;
//         //     this.setState({loading: true});
//         //     let data = await fetch(url);
//         //     let parsedata = await data.json();
//         //     this.setState({ 
//         //         page: this.state.page + 1,
//         //         articles: parsedata.articles,
//         //         loading: false
//         //     })
//         // }
//         // this.setState({ page : this.state.page + 1});
//         setPage(page+1);
//         updatenews();
//     }

//     const fetchMoreData = async () => {
//         // this.setState({ page : this.state.page + 1});
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&pageSize=${props.pageSize}&page=${this.state.page}`;
//         setPage(page+1);
//         // this.setState({loading: true});
//         setLoading(true);
//         let data = await fetch(url);
//         let parsedata = await data.json();
//         // console.log(parsedata);
//         setArticles(articles.concat(parsedata.articles));
//         settotalResults(parsedata.totalResults)
//         // this.setState ({
//         //     articles : this.state.articles.concat(parsedata.articles),
//         //     totalResults: parsedata.totalResults,
//         //     // loading: false,
//         // });
//     };

//         return (
//         <>
//             <h1 className="text-center" style={{margin: "35px 0px"}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
//             {loading && <Spinner/>}
//             <InfiniteScroll
//                 dataLength={articles.length}
//                 next={fetchMoreData}
//                 hasMore={articles.length !== totalResults}
//                 loader={<Spinner/>}
//             >
//             <div className="container">
//             <div className="row">
//             {articles.map((element) =>{
//                 return <div className="col-md-4" key={element.url}>
//                 <NewsItem  title = {element.title?element.title:""}  description = {element.description?element.description: ""}  imageurl = {element.urlToImage} newsurl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
//                 </div>
//             })} 
//             </div>
//             </div>
//             </InfiniteScroll>
//             {/* <div className="container d-flex justify-content-between">
//             <button disabled= {this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.Handlepreviousclick}> &larr; Previous</button>
//             <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.Handlenextclick}>Next &rarr;</button>
//             </div> */}
//         </>
//         )
//     }


// News.defaultprops = {
//     country: 'us',
//     pageSize: 8,
//     category: "general"
// };
// News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
// }; 


// export default News;

    import React, { useEffect, useState } from 'react';
    import NewsItem from './NewsItem';
    import Spinner from './Spinner';
    import PropTypes from 'prop-types';
    import InfiniteScroll from 'react-infinite-scroll-component';

    const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&pageSize=${props.pageSize}&page=${page}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    };

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews();
        // eslint-disable-next-line
    }, [page]);

    const fetchMoreData = async () => {
        setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&pageSize=${props.pageSize}&page=${page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    return (
        <>
        <h1 className="text-center" style={{ margin: '35px 0px' , marginTop: "90px"}}>
            NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
        >
            <div className="container">
            <div className="row">
                {articles.map((element) => {
                return (
                    <div className="col-md-4" key={element.url}>
                    <NewsItem
                        title={element.title ? element.title : ''}
                        description={element.description ? element.description : ''}
                        imageurl={element.urlToImage}
                        newsurl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                    />
                    </div>
                );
                })}
            </div>
            </div>
        </InfiniteScroll>
        </>
    );
    };

    News.defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general',
    };

    News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apikey: PropTypes.string.isRequired,
    setProgress: PropTypes.func.isRequired,
    };

    export default News;
