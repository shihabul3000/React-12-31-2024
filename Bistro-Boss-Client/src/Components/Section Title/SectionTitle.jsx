import PropTypes from "prop-types";








const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <p className="text-yellow-600">---{subHeading}---</p>
      <h3 className="text-5xl uppercase">{heading}</h3>
    </div>
  );
};



















SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;
