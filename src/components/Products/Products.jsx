import React from "react";
import PropTypes from "prop-types";

const Products = ({ result }) => {
  return (
    <>
      <section className="category-section">{result}</section>
      <div className="w100 flexCenter taC">
        <h3 className="small underline">VIEW ALL</h3>
      </div>
    </>
  );
};

Products.propTypes = {
  result: PropTypes.node.isRequired,
};

export default Products;
