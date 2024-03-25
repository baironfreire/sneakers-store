export const HTTP_CODES_RESPONSE = {
    SUCCESSFUL_OPERATION: {
        httpCode: 200,
        code: 'SUCCESSFUL_OPERATION',
        message: 'The request has been successful.',
    },
    BAD_REQUEST: {
        httpCode: 400,
        code: 'BAD_REQUEST',
        message: 'Bad request'
    },
    DATA_NOT_FOUND: {
        httpCode: 404,
        code: 'DATA_NOT_FOUND',
        message: 'Data not found',
    },
    PRODUCT_NOT_FOUND: {
        httpCode: 404,
        code: 'PRODUCT_NOT_FOUND',
        message: 'Product not found',
    },

    INTERNAL_ERROR: {
        httpCode: 500,
        code: 'INTERNAL_ERROR',
        message: 'Internal Server Error.',
    }
}
