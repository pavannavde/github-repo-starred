import React, { useEffect } from "react";
import Card from "./component/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./Redux/Slice";
import Loader from "./component/Loader";
import ControlledAccordions from "./component/Popover";


const Home = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);
  const currentPage = useSelector((state) => state.data.currentPage);

  useEffect(() => {
    dispatch(fetchData({page:currentPage}));
    console.log(data)
  }, [dispatch]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      dispatch(fetchData({ page: currentPage }));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

 

  return (
    <div className="home">
      <div className="header">
        <h1>Most Starred Repo</h1>
      </div>
      {
         error!==null && <div className="errorDiv">Error: {error}</div>
      }
      {!loading ? (
        data.map((repo) => {
          // return <Card repo={repo} />;
          return <ControlledAccordions repo={repo} />;
        })
      ) : (
        <Loader />
      )}
     
    </div>
  );
};

export default Home;
