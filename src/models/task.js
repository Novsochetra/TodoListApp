import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";


export default class tasks extends Model {
  static table = 'tasks'
  static associations = {
    categories: { type: 'belongs_to', key: 'category_id' }
  }

  @field('title') title
  @field('deadline') deadline
}