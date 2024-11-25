const tourModel ={

    async getAllToursModel(){
        const peticion = await fetch(process.env.URL_BDD_TOURS)
        const tours = await peticion.json()
        return tours
    }
    ,


    async getTourByIdModel(tourId) {
        const response = await fetch(`${process.env.URL_BDD_TOURS}${tourId}`);
        if (!response.ok) {
            return {error:"Tour no encontrado"}
        }
        const data = await response.json()
        return data
    },

    async createTourModel(newTour){
        const url = process.env.URL_BDD_TOURS
        const peticion  = await fetch(url,{
            method:'POST',
            body:JSON.stringify(newTour),
            headers:{'Content-Type':'application/json'}
        })
        const data = await peticion.json()
        return data
    }

    ,

    async updateTourModel(tourId,updateTourModel){
        // CONEXIÓN A BDD
        const url = `${process.env.URL_BDD_TOURS}${tourId}`
        // ENVIAR INFO A BDD
        const peticion = await fetch(url,{
            method:"PUT",
            body:JSON.stringify(updateTourModel),
            headers:{'Content-Type':"application/json"}
        })
        // OBTENER REPUESTA DE BDD
        const data = await peticion.json()
        // MANDAR RESPUESTA A CONTROLADOR
        return data
    }

    ,

    async deleteTourModel(tourId){
        // CONEXIÓN A BDD
        const url = `${process.env.URL_BDD_TOURS}${tourId}`
        // ENVIAR INFO A BDD
        const peticion = await fetch(url,{
            method:"DELETE"
        })
        // OBTENER REPUESTA DE BDD
        const data = await peticion.json()
        // MANDAR RESPUESTA A CONTROLADOR
        return data
    }

    ,


    async getTourByID(tourId){
        const peticion = await fetch(`${process.env.URL_BDD_TOURS}${tourId}`)
        const data = await peticion.json()
        return data
    }

}

export default tourModel
