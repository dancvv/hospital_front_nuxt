
import request from '@/utils/request'

const api_name = `/api/cmn/hospital`
export default{
    // 根据dictCode获取下级节点
    findByDictCode(dictcode){
        return request({
            url: `${api_name}/findByDictCode/${dictcode}`,
            method: 'get',
        })
    },
    // 根据id获取下级节点
    findByParentId(parentId){
        return request({
            url: `${api_name}/findChildData/${parentId}`,
            method: 'get',
            params: searchObj
        })
    }
}