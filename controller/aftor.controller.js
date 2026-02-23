const { json } = require("express");

const getAllAuthors = async (req, res) => {
    try {
    const authors = await AuthorSchema.find()
    res.status(200).json(authors)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
const getOneAuthor = async (req, res) => {
    try {
    
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
const AddAuthor = async (req, res) => {
    try {
    
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
const updateAuthor = async (req, res) => {
    try {
    
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
const deleteAuthor = async (req, res) => {
    try {
    
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
module.exports={
    getAllAuthors,
    getOneAuthor,
    AddAuthor,
    updateAuthor,
    deleteAuthor
}