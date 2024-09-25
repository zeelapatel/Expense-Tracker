const { config } = require("dotenv")
const ExpenseSchema = require("../models/expenseModel")

exports.addExpense = async(req,res)  => {
 
    const {title,amount,category,description,date}= req.body
    const expense = ExpenseSchema({

        title,
        amount,
        category,
        description,
        date,
    })
    

    try{
        if(!title || !amount || !category || !description || !date) {
            return res.status(400).json({msg: "Please fill all fields"})
        }
        if(!amount==='number' || amount<=0) {
            return res.status(400).json({msg: "Amount must be a Positive number"})
        }
        await expense.save()
        res.status(200).json({msg:"Expense Added"})
    }catch(err) {
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
    console.log(expense)

}


exports.getExpense = async(req,res)=>{
    try{
        const expense = await ExpenseSchema.find().sort({createdAt:-1})
        res.status(200).json(expense)
    }catch(err){
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
}

exports.deleteExpense = async(req,res)=>{
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
    .then((expense)=>{
        res.status(200).json({msg: "Expense Deleted"})
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    })
}