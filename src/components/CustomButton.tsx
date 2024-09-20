const CustomButton = ({ className, children, img }: any) => {
  return (
    <button
      className={className ? `btn-component ${className}` : "btn-component"}
    >
      {img && (
        <div className={`${className}`}>
          <img src={img} alt="wp image" />
          {children}
        </div>
      )}
      {!img && children}
    </button>
  );
};

export default CustomButton;
