import request from 'superagent'

export async function getProduct() {
  try {
    const res = await request.get('/api/v1/product')
    console.log(res.body);
    
    return res.body
  } catch (e) {
    console.error('Errorrrr')
  }
}