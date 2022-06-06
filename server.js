const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const discgolfers = {
    'lizotte': {
        'hometown': 'Shrewsbury, Massachusetts',
        'sponsor': 'Disc Mania',
        'wins': '73',
        'rating': '1034',
    },
    'wysocki': {
        'hometown': 'Scottsdale, Arizona',
        'sponsor': 'Dynamic Discs',
        'wins': '122',
        'rating': '1051',
    },
    'mcbeth':{
        'hometown': 'Huntington Beach, California',
        'sponsor': 'Discraft',
        'wins': '139',
        'rating': '1052',
    },
    'conrad': {
        'hometown': 'Blacksburg, Virginia',
        'sponsor': 'MVP',
        'wins': '31',
        'rating': '1037',
    }
}

app.get('/api/:discGolferName', (request,response) => {
    const discGolferName = request.params.discGolferName
    if (discgolfers[discGolferName]){
        response.json(discgolfers[discGolferName])
    }else{
        return response.send(`<h2>Disc Golfer Not Found<h2>`)
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('server is running.')
})