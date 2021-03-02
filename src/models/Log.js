
const Log = {
  stats: function(userId) {
    const logs = this.findByUser(userId)
    let stats = {
      impression: 0,
      conversion: 0,
      total: 0
    }
    
    logs.forEach(log => {
      stats[log.type] += 1
      stats.total += log.revenue
    });

    return stats
  },

  findByUser: function(userId) {
    const rawList = require('./logs.json')
    var logs = []
    rawList.forEach(log => {
      if(log["user_id"] === userId){
        logs.push(log)
      }
    });
    console.log({logs})
    return logs
  }
}

export default Log;