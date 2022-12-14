import request from '@/utils/request'

const api_name = `/api/ucenter/wx`

export default {
    getLoginParam() {
        return request({
            url: `${api_name}/getLoginParam`,
            method: `get`
        })
    },
    // 查询支付状态
    queryPayStatus(orderId) {
        return request({
            url: `/api/order/weixin/queryPayStatus/${orderId}`,
            method: 'get'
        })
    },
    createNative(orderId) {
        return request({
            url: `/api/order/weixin/createNative/${orderId}`,
            method: 'get'
        })
    },
    //   取消订单
    cancelOrder(orderId) {
        return request({
            url: `/api/order/orderInfo/auth/cancelOrder/${orderId}`,
            method: 'get'

        })
    }

}