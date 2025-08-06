import downIcon from "/src/images/arrow-down.svg";
export const Button = ({text, className, id}) => {
  return (
    <a className={`${className??''} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={downIcon} alt="arrow" />
        </div>
      </div>
    </a>
  );
};
