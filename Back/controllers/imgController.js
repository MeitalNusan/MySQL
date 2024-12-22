// import imgModel from "../models/imgModel.js"
import Image from "../models/imgModel.js"




// export const getAllImg = async (req,res) =>{
//     try {
//         const imgs = await Image.findAll()
//         res.json(imgs)
 
//     } catch (error) {
//         res.json({message:error.message})
//     }
// }

// export const getImg = async (req, res) =>{
//     try {
//         const {id} = req.params
//         const img = await Image.findByPk(id)
//         res.json(img)
//     } catch (error) {
//         res.json({message:error.message})
//     } 
// }


// export const createImg = async (req, res) => {
//     try {
//         await Image.create(req.body)
//         res.json({
//             "message": "registro creado"
//         })
//     } catch (error) {
//         res.json({message: error.message})
//     }
// }

// export const updateImg =async (req, res) =>{
//     try {
       
//         await Image.update(req.body,{
//             where:{id:req.params.id}
//         })
//         res.json({
//             "message": "registro modificado correctamente"
//         })
//     } catch (error) {
//         res.json({message:error.message})
        
//     }
// }

// export const deleteImg= async (req, res) =>{
//     try {
//         await Image.destroy({
//         where:{id:req.params.id}, //si no funciona, probar sacando esta coma
//         })
//         res.json({
//             "message": "registro eliminado correctamente"
//         })
        
//     } catch (error) {
//         res.json({message:error.message})
        
//     }
// }