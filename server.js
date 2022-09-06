const cors = require ('cors')
const express = require('express')
const app = express()
const axios = require('axios') 

app.use(cors())
app.get('/:cep', async (req, res) => {
  try { 

    const cep = req.params.cep
  const informacoes = await axios({
    
      method: "get",
      url: `https://viacep.com.br/ws/${cep}/json/`,
      }
    ); 
    console.log(informacoes.data)
      return res.json(informacoes.data)

  } catch (error) {
    console.log(error)
    return res.json (error)
  }
})

app.listen('4567', function (){
  console.log('servidor ligado')
})
