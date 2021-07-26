const Realm = require("realm");
const BSON = require("bson");
// Update this with your App ID
const app = new Realm.App({ id: "<Your App ID>" });

const CatSchema = {
  name: "Task",
  properties: {
    _id: "objectId",
    name: "string",
  },
  primaryKey: "_id",
};


async function run() {
    const credentials = Realm.Credentials.anonymous();
    await app.logIn(credentials);

    const realm = await Realm.open({
        schema: [CatSchema],
        sync: {
          user: app.currentUser,
          partitionValue: "My Partition",
        },
    });
      
    realm.close();

    

}
run().catch((err) => console.log(`error occurred: ${JSON.stringify(err)}`));