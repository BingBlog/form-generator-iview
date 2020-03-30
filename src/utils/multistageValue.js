/**
 * @file: 处理递归设置model值
 * @author: zhw(zhenghaiwang@baidu.com)
 * @Date: 2020-03-19 17:21:14
 * @Last Modified by: zhw
 * @Last Modified time: 2020-03-31 00:55:26
 */
// import {isObject} from './utils';

export const setMultistageValue = function setMultistageValue({originModel, model, value, isInit = false}) {

    let path = model.split('.');
    let formModel = originModel;
    if (!originModel) {
        throw new Error('[formGenerator warn]: please define a valid model !');
    }
    while (path.length) {
        if (!formModel[path[0]] && path.length !== 1) {
            this.$set(formModel, path[0], {});
        }
        if (path.length === 1) {
            let doneValue = isInit ? formModel[path[0]] : value;
            this.$set(formModel, path[0], doneValue);
        }
        formModel = formModel[path[0]];
        path.shift();
    }
};

export const getMultistageValue = function getMultistageValue({originModel, model}) {
    let path = model.split('.');
    return path.reduce((value, model) => {
        return value[model];
    }, originModel);
};

