import mongoose, {Schema} from "mongoose";

const postSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;