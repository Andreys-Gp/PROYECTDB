import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/MernDBSENA')
        console.log('>>>>>>>>>DB connect><<<<<<<<<')

    } catch (error) {
        console.log(error)
    }
}