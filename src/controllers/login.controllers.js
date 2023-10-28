
export const ctrlGetLogin = (req, res) => {
    try {
        res.send('Hello World!')
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
};

export const ctrlPostLogin = (req, res) => {
    try {
        //res.status(200)
        res.send('Got a POST request')
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
};

export const ctrlPutLogin =  (req, res) => {
    try {
        res.send('Got a PUT request at /user')
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })   
    }
};

export const ctrlDelLogin =  (req, res) => {
    try {
        res.send('Got a DELETE request at /user')
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })    
    }
    
};
