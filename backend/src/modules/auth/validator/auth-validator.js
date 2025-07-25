import joi from 'joi'

export const validatedUser=joi.object({
    
name:joi.string().required(),
email:joi.string().email().required(),
password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})