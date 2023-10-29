
export const loginErrorHandler = (error, req, res, next) => {
    //console.error(error)
    return res.status(500).json({'error de servidor':error
    })
}