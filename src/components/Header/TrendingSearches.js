import React from 'react';
import Trend from './Trend'

const TrendingSearches = (props) => {
  return (
    <div className="trends">
      <div className="search-trends">
        <h4>Search trends</h4>
       <Trend 
       name='My first IT job'/>
        <Trend
        name=' Get a full-time job'/>
        <Trend
        name='Improve my skills'/>
        <Trend
        name='Learn new things'/>
      </div>
    </div>
  );
};

export default TrendingSearches;
