const Course = require('../models/Course');

// @desc SET Course INSERT INTO DB
// @route SET /api/courses

const createCourse = async (req, res) => {
    if(!req.body.name || !req.body.author) res.status(404).send("Not found");


    const course = await Course.create({
        name: req.body.name,
        author: req.body.author,
        isPublished: true
    })
    res.status(200).json(course)

}

const checkCourses = async(req,res)=> {
    const course = await Course.find()
    res.status(200).json(course)
}


const updateCourse = async(req,res)=>{
    const id = req.params.id
    const course = await Course.findById(id);

    course.name = req.body.name,
    course.author = req.body.author

    const result = await course.save()
    res.status(200).json(result)
}

const deleteCourse = async(req,res)=>{

    const id = req.params.id
    const course = await Course.deleteOne({_id: id})

    res.status(200).json(course)
}


module.exports = {
    createCourse,
    checkCourses,
    updateCourse,
    deleteCourse
    //toliau vardinate get, update, 
    //delete metodus-funkcijas, kurias cia busite aprase
}