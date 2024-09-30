import express from 'express'
import { urlModel } from '../Model/shortUrl'



export const createUrl = async(
    req: express.Request,
    res: express.Response
) =>{
    try{
        console.log("The full url is: ", req.body.fullUrl)
        const {fullUrl} = req.body
        const urlFound = await urlModel.find({fullUrl})
        if(urlFound.length>0){
            res.status(409)
        }else{
            const shortUrl = await urlModel.create({fullUrl});
            res.status(201).send(shortUrl)
        }

    }catch(error){
        res.status(500).send({"Message": "Something went wrong"})
    }
};

export const getAllUrl = async(
    req: express.Request,
    res: express.Response
) =>{
    try{
        const shortUrls = await urlModel.find();
        if(shortUrls.length<0){
            res.status(400).send({message: "Short Urls not found"})
        }else{
            res.status(200).send(shortUrls)
        }
    } catch(error) {
        res.status(500).send({message: "something went wrong bro!"})
    }


};

export const getUrl = async(
    req: express.Request,
    res: express.Response
) =>{
    try{
        const shortUrl = await urlModel.findOne({shortUrl:req.params.shortUrl})
        if(!shortUrl){
            res.status(404).send({message:"Full url not found"})
        }else{
            shortUrl.clicks++;
            shortUrl.save()
            res.redirect(shortUrl.fullUrl);
    }}catch(error){
        res.status(500).send({message: "something went wrong bro!"})

    }
};

export const deleteUrl = async(
    req: express.Request,
    res: express.Response
) =>{
    try{
        const shortUrl = await urlModel.findByIdAndDelete({_id: req.params.id})
        if(shortUrl){
            res.status(200).send({message:"Requested Url successfully deleted"})
        }
    }catch(error){
        res.status(500).send({message: "something went wrong bro!"})

    }
};