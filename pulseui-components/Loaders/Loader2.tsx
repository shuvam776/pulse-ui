function Loader2({color="black",size=40, thickness=6}) {
  return (
    <div className="animate-spin" style={{
        width: `${size}px`,
        height:`${size}px`,
        border:`${thickness}px solid ${color}`,
    }}>
        
    </div>
  )
}

export default Loader2