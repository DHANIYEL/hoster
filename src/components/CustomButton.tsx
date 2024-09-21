const CustomButton = ({ className, children, img, handleClick, href }: any) => {
  return (
    <button
      className={className ? `btn-component ${className}` : "btn-component"}
      onClick={handleClick}
    >
      <a href="#pricing" />
      {img && (
        <div className={`${className}`}>
          <img src={img} alt="wp image" className="w-5 h-5" />
          {children}
        </div>
      )}
      {!img && children}
    </button>
  );
};

export default CustomButton;
