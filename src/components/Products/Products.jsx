import React from "react";
import PropTypes from "prop-types";

const Products = ({ result }) => {
  return (
    <section className="category-section">
      {result}
    </section>
  );
};

Products.propTypes = {
  result: PropTypes.node.isRequired,
};

export default Products;
