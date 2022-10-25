class ApiPage{
    
    constructor (page) {
        this._page = page
        this.taskId = null
        this.task = null
        
    }


    
   

    //Main Page
    get urlApiProd(){
        return "https://api.ganttpro.com/v1.0/"
    }

     async getTaskById (request, id){
        
        const req = await request.get('https://api.ganttpro.com/v1.0/tasks/'+ id || this.task.id, {
            headers: {
                'x-api-key': `f19d40fa86ac458e9527fd733d94370b`,
              },
        })
         return await req.json()
    }

    get taskN(){
        return "https://api.ganttpro.com/v1.0/"
    }

}
module.exports = ApiPage