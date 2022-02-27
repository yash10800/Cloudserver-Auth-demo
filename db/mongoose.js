const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI || 'mongodb+srv://yash2181:yash2181@demo.lfw0v.mongodb.net/Demo?retryWrites=true&w=majority';
mongoose.connect(uri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>console.log('DB Connected Successfully')).catch(()=>{
    console.log('Look for the error')
})
