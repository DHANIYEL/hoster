

const CustomButton = ({className, children}:any) => {
  return (
    <button
    className={className ? `btn-component ${className}` : "btn-component"}
    >
     {children}
    </button>
  )
}

export default CustomButton