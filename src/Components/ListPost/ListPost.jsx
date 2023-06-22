import React, { useEffect } from "react";
import "./ListPost.scss";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../redux/features-actions/getListSlice";
import ListItem from "../ListItem/ListItem";

const ListPost = () => {
  const dispatch = useDispatch();

  const { list, isLoading } = useSelector((state) => state.getlist);

  useEffect(() => {
    dispatch(getList());
  }, [list.count]);

  const results = list.results;

  return (
    <section className="list-container mt-3">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        results.map((item) => <ListItem key={item.id} item={item} />)
      )}
    </section>
  );
};

export default ListPost;
