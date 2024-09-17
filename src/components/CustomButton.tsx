

const CustomButton = ({className, children}:any) => {
  return (
    <button
    className={className ? `btn-component shadow-md ${className}` : "btn-component"}
    >
     {children}
    </button>
  )
}

export default CustomButton