// Generated by CoffeeScript 1.8.0
(function() {
  var Cover, Schema, commentSchema, coverSchema, mongoose;

  mongoose = require('mongoose');

  Schema = mongoose.Schema;

  coverSchema = new Schema({
    content: String,
    contentBegin: String,
    title: String,
    quote: String,
    date: Date,
    time: {
      year: String,
      month: String,
      day: String,
      minute: String
    },
    imgs: [String],
    img: {
      original: String,
      px200: String,
      px600: String,
      px1366: String
    },
    isTop: {
      type: Boolean,
      "default": false
    },
    pv: {
      type: Number,
      "default": 0
    },
    editDate: [
      {
        date: Date,
        ip: String
      }
    ],
    comments: [commentSchema]
  });

  commentSchema = new Schema({
    time: Date,
    content: String,
    user: String,
    subComments: [
      {
        time: Date,
        content: String,
        user: String,
        toUser: String
      }
    ]
  });

  coverSchema.statics = {
    readTopAndCount: function(cb) {
      var coverThis;
      coverThis = this;
      return this.count().exec(function(err, count) {
        if (err || count === 0) {
          return cb("err", null, 0);
        } else {
          return coverThis.find({}, null).sort({
            isTop: -1,
            date: -1
          }).limit(1).exec(function(err, covers) {
            if (err) {
              return cb("err", null, 0);
            } else {
              return cb(null, covers[0], count);
            }
          });
        }
      });
    }
  };

  Cover = mongoose.model('Cover', coverSchema);

  module.exports = Cover;

}).call(this);

//# sourceMappingURL=Cover.js.map
