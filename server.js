const express = require('express');
const path = require('ruta');

const app = express();

// Solo sirven los archivos estáticos del directorio dist
app.use(express.static(__
dirname + '/ dist / <nombre-de-aplicación>'
))
;

app.get('/ *', función(req, res)
{

  res.sendFile(path.join(__
  dirname + '/ dist / <nombre-de-aplicación> /index.html'
))
  ;
}
)
;

// Inicie la aplicación escuchando en el puerto Heroku predeterminado
app.listen(process.env.PORT || 8080);
