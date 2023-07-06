const mongoose = require('mongoose');

var FbPost = mongoose.model('FbPost',{
    postUrl: {type:String},
    title: {type: String}
});

module.exports = {
    FbPost
};