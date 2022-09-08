//O cors permite acesso do front com a Api
const cors = require ('cors')

// o express é necessário pra criar a api 
const express = require('express')

//Variável onde inicio o meu express
const app = express()

//Usado para consumir a api ViaCep
const axios = require('axios') 

//Habilitação do cors
app.use(cors())

/*Rota
  Objeto assíncrono que vai pegar os dados solicitados de acordo com o cep informado*/
app.get('/:cep', async (req, res) => {
  try { 

    // Requisição dos dados 
    const cep = req.params.cep

  //espera da obtenção dos dados
  const informacoes = await axios({
    
      method: "get",
      url: `https://viacep.com.br/ws/${cep}/json/`,
      }
    ); 
    //Resposta da requisição
    console.log(informacoes.data)
      return res.json(informacoes.data)

  //identifica o erro
  } catch (error) {
    console.log(error)
    return res.json (error)
  }
})
// informa a porta a ser ouvida pelo express
app.listen('4567', function (){

  // se o servidor tiver funcionando retornacom essa string
  console.log('servidor ligado')
})
