
function DescubPaleta(props,bg){
    return(
        <div style={{
            backgroundColor: props.color,
            width: '120px',
            height: '120px',
            cursor: 'pointer',
          }}
          className="color-div"
          data-color= {props.color}
          >
        </div>
    )
}
export default DescubPaleta;