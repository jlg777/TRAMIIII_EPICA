import { body } from 'express-validator';

export const createLoginSchema = [
    body('user')
    .notEmpty().withMessage('User no debe estar vacio')
    .isEmail().withMessage('User debe ser tipo email'),
    body('pass')
    .notEmpty().withMessage('Pass no debe estar vacio'),
    body('image')
    .notEmpty().withMessage('Image no debe estar vacio')
    .isURL().withMessage('Image debe ser una URL'),
    
];

export const editLoginSchema = [];

export const editPutLoginSchema = [];

export const deleteLoginSchema = [];

