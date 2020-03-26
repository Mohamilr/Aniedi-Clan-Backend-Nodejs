// formatted response
const response = (res, status , code, message) => {
    res.status(code).json({
        status,
        message
    })
}

export default response;