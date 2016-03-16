'use strict';

/**
 * 在postprocessor阶段对属于module模块化组件的代码包裹上define
 * @param {Object} content
 * @param {Object} file
 * @param {Object} conf
 */
module.exports = function(content, file, conf){
    if (file.isMod || conf.wrapAll){
        if (!/^\s*define\s*\(/.test(content)){
            content = 'define(function(require, exports, module){ ' + content +
                    ' \r\n});';
        }
        return content;
    }
};
