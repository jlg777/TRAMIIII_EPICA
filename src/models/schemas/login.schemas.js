import { body } from 'express-validator';

export const createLoginSchema = [
    body('name')
    .notEmpty().withMessage('User no debe estar vacio'),
    body('email')
    .notEmpty().withMessage('Pass no debe estar vacio'),
    body('pass')
    .notEmpty().withMessage('Image no debe estar vacio'),
        
];

//export const editLoginSchema = [];

//export const editPutLoginSchema = [];

//export const deleteLoginSchema = [];

