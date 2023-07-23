import * as httpRequest from '~/utils/httprequest';

export const search = async (q) => {
    try {
        const res = await httpRequest.get('pet/show', {
            params: {
                q,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

