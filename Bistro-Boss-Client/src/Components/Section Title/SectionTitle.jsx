import PropTypes from "prop-types";








const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <p>{subHeading}</p>
      <h3>{heading}</h3>
    </div>
  );
};




















SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;
