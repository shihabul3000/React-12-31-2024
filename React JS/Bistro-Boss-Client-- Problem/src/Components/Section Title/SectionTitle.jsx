import PropTypes from "prop-types";








const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <p className="text-yellow-600 mb-2">---{subHeading}---</p>
      <h3 className="text-5xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
  );
};



















SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;
