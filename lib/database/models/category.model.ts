import { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
    _id: string;
    name: string;
}

const CategoySchema = new Schema({
    name: { type: String, required: true, unique: true },
})

const Category = models.Category || model('Category', CategoySchema);

export default Category;