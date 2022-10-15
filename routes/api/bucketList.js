const {Router} = require('express');
const bucketListModel = require('../../models/BucketList')

const router = Router()


//get all items of list
router.get('/', async(req,res)=>{
    try {
        const bucketList = await bucketListModel.find()
        const sorted = bucketList.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())

        res.status(200).json(sorted)
    } catch (error) {
        console.log(error)
    }
})

//create new Item
router.post('/', async(req,res)=>{
    try {
        const newBucketItem = await bucketListModel.create(req.body)
        res.status(200).json(newBucketItem)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//update Item
router.put('/:id',async(req,res)=>{
    const id = req.params.id
    
    try {
        await bucketListModel.findByIdAndUpdate(id,req.body)
        res.status(200).json({message:'Item updated!'})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.delete('/:id',async(req,res)=>{
    const id = req.params.id

    try {
        await bucketListModel.findByIdAndDelete(id)
        res.status(200).json({message:'Item deleted successfully!'})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router