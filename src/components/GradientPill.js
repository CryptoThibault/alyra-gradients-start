function GradientPill(colorStart, colorEnd) {
  return (
    <div
      className="card-gradient rounded-pill mx-auto mb-4"
      style={{ backgroundImage: `linear-gradient(to right, ${colorStart}, ${colorEnd})` }}
    ></div>
  )
}

export default GradientPill