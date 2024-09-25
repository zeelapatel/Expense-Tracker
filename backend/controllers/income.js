const { config } = require("dotenv")
const IncomeSchema = require("../models/incomeModel")

exports.addIncome = async(req,res)  => {
 
    const {title,amount,category,description,date}= req.body
    const income = IncomeSchema({
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
        await income.save()
        res.status(200).json({msg:"Income Added"})
    }catch(err) {
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
    console.log(income)

}


exports.getIncomes = async(req,res)=>{
    try{
        const incomes = await IncomeSchema.find().sort({createdAt:-1})
        res.status(200).json(incomes)
    }catch(err){
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
}

exports.deleteIncome = async(req,res)=>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
    .then((income)=>{
        res.status(200).json({msg: "Income Deleted"})
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    })
}