function Stats(props){
  const stats = props.stats

  return(
    <div class="stats">
      <p class="impression">{stats.impression}</p>
      <p>Impressions</p>
      <p class="conversion">{stats.conversion}</p>
      <p>Conversions</p>
      <p class="total">{stats.total}</p>
      <p>Total</p>
    </div>
  )
}

export default Stats;