import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export default class Category extends Model {
  static table = 'categories'
  static associations = {
    posts: { type: 'has_many', foreignKey: 'category_id' }
  }

  @field('name') name
  @field('color') color
}
