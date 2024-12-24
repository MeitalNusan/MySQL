import postModel from "../models/postModel.js"

export const getAllPost = async (req,res) =>{
    try {
        const posts = await postModel.findAll()
        res.json(posts)

    } catch (error) {
        res.json({message:error.message})
    }
}

export const getPost = async (req, res) =>{
    try {
        const {id} = req.params
        const post = await postModel.findByPk(id)
        res.json(post)
    } catch (error) {
        res.json({message:error.message})
    } 
}


export const createPost = async (req, res) => {
    try {
        await postModel.create(req.body)
        res.json({
            "message": "registro creado"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updatePost =async (req, res) =>{
    try {
       
        await postModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message": "registro modificado correctamente"
        })
    } catch (error) {
        res.json({message:error.message})
        
    }
}

export const deletePost = async (req, res) =>{
    try {
        await postModel.destroy({
        where:{id:req.params.id}, //si no funciona, probar sacando esta coma
        })
        res.json({
            "message": "registro eliminado correctamente"
        })
        
    } catch (error) {
        res.json({message:error.message})
        
    }
}