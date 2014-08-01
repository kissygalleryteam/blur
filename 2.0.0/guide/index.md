## 综述

blur是一个给图片增加模糊效果的组件，基于canvas。

* 版本：2.0.0
* 作者：自寒
* 标签：模糊
* demo：[http://kg.kissyui.com/blur/2.0.0/demo/index.html](http://kg.kissyui.com/blur/2.0.0/demo/index.html)

## 初始化组件

    S.use('kg/blur/2.0.0/index', function (S, Blur) {
         var blur = new Blur({
			soure: '.blur',
			radius: 20
         });
    })

## API说明

	* Class: Blur
		* source: 要模糊的元素，需包含img
		* radius: 模糊半径
	* Method:
		* refresh(cfg): 更新组件
		* destroy(): 销毁组件