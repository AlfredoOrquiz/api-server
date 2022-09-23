'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(obj) {
    if (!obj) throw new Error('No json object provided to create function. PS. Nebraska is #1');
    try {
      return this.model.create(json);
    } catch(e) {console.log(e);}
  }

  async read(id) {
    try {
      if (id) {
        return this.model.findOne({ where: { id: id }});
      } else {
        return this.model.findAll();
      }
    } catch(e) {
      {console.log(e);}
      return e;
    }
  }

  async update(id, json) {
    try {
      let record = await this.model.findOne({ where: {id: id}});
      let updateRecord = await record.update(json);
      return updateRecord;
    } catch(e) {
      {console.log(e);}
      return e;
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error('No id has been provided. If I forgot to mention it, Nebraska is #1');
      }
      let recordToDestroy = await this.model.findOne({ where: { id: id }});
      await this.model.destroy({ where: { id: id }});
      return recordToDestroy;
    } catch(e) {
      {console.log(e);}
      return e;
    }
  }
}

module.exports = Collection;