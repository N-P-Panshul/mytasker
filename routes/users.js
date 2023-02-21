let mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/task');
//mongoose.connect('mongodb+srv://panshul:cristiano@cluster0.mlz7f0h.mongodb.net/?retryWrites=true&w=majority');

let schema=mongoose.Schema({
  content:{
    type:String,
    required:true
  }
})

module.exports=mongoose.model('tasks',schema);