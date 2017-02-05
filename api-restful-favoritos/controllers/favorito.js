'use strict'

var Favorito = require('../models/favorito');

function prueba(req, res){

  if(req.params.nombre){
    var nombre = req.params.nombre;
  }else{
    var nombre = "sin nombre"
  }

  res.status(200).send({
    data: [2,3,4],
    texto: "Hola mundo con NodeJs y Express "+nombre
  });
}

function getFavorito(req, res){
  var favoritoId = req.params.id;

  Favorito.findById(favoritoId, function(err, favorito){
    if(err){
      res.status(500).send({message: 'Error al devolver el marcador'});
    }

    if(!favorito){
      res.status(404).send({message: 'No hay marcador'});
    }

    res.status(200).send({favorito});
  });
}

function getFavoritos(req, res){
  Favorito.find({}).sort('-_id').exec((err, favoritos) =>{
    if(err){
      res.status(500).send({message: 'Error al devolver los marcadores'});
    }

    if(!favoritos){
      res.status(404).send({message: 'No hay marcadores'});
    }

    res.status(500).send({favoritos});

  });
}

function saveFavorito(req, res){
  var favorito = new Favorito();

  var params = req.body;
  favorito.title =  params.title;
  favorito.description = params.description;
  favorito.url = params.url;

  favorito.save((err, favoritoStored)=>{
    if(err){
      //Error 500: Error de servidor
      res.status(500).send({message: 'Error al guardar el marcador'});
    }else{
      res.status(200).send({favorito: favoritoStored});
    }
  });
}

function updateFavorito(req, res){
  var favoritoId = req.params.id;
  var update = req.body;

  console.log(update);

  Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdated) =>{
    if(err){
      //Error 500: Error de servidor
      res.status(500).send({message: 'Error al actualizar el marcador'});
    }

    res.status(200).send({favorito: favoritoUpdated});
  });
}

function deleteFavorito(req, res){
  var favoritoId = req.params.id;

  res.status(200).send({delete: true, data: favoritoId});
}


module.exports = {
  prueba,
  getFavorito,
  getFavoritos,
  saveFavorito,
  updateFavorito,
  deleteFavorito
}
