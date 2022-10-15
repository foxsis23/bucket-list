 const {Schema,model} = require('mongoose');

 const bucketListSchema = new Schema({
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
 })

 const bucketList = model('bucketListModel',bucketListSchema);

module.exports = bucketList