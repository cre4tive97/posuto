import mongoose from 'mongoose';

const PositionSchema = new mongoose.Schema({
  width: Number,
  height: Number,
  x: Number,
  y: Number,
});
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      maxlength: 50,
    },
    contents: String,
    position: [PositionSchema],
    isEditing: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Users',
      required: true,
    },
  },
  { timestamps: true },
);

// postSchema.index({ Users: 1, title: 1 }, { unique: true });
const PostModel = mongoose.model('Posts', postSchema);

export default PostModel;
