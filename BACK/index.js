const moongose = require("moongose");

const app = require("app");

const POST_SERVER = process.env.PORT || 3977;

const { API_VERSION, IP_SERVER, portDb } = require("./config");

let nombre = "Luis";

moongose.set("useFindAndModify", false);
moongose.connect(
  `mongodb://${IP_SERVER}:${portDb}/bunkandb`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log(`La conexion a la base de datos es correcta`);

      app.listen(port, () => {
        console.log("########");
        console.log("#### API REST ####");
        console.log("https://${IP_SERVER}:${port}/api/${API_VERSION}");
      });
    }
  }
);

("hola me llamo ${nombre}");
