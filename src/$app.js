import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button/buttonGroup'
import Input from './input'
import Row from './layout/row'
import Col from './layout/col'
import Layout from './layout'
import Header from './layout/header'
import Aside from './layout/aside'
import Content from './layout/content'
import Footer from './layout/footer'
import Toast from './toast'
import plugins from './plugins'
import Tabs from './tabs'
import TabsHeader from './tabs/tabsHeader'
import TabsItem from './tabs/tabsItem'
import TabsBody from './tabs/tabsBody'
import TabsPanel from './tabs/tabsPanel'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse/collapseItem'
import Cascader from './cascader'
import CascaderItem from './cascader/cascaderItem'

Vue.component('s-button', Button)
Vue.component('s-button-group', ButtonGroup)

Vue.component('s-icon', Icon)

Vue.component('s-input', Input)

Vue.component('s-row', Row)
Vue.component('s-col', Col)

Vue.component('s-layout', Layout)
Vue.component('s-header', Header)
Vue.component('s-aside', Aside)
Vue.component('s-content', Content)
Vue.component('s-footer', Footer)

Vue.component('s-toast', Toast)

Vue.component('s-tabs', Tabs)
Vue.component('s-tabs-header', TabsHeader)
Vue.component('s-tabs-item', TabsItem)
Vue.component('s-tabs-body', TabsBody)
Vue.component('s-tabs-panel', TabsPanel)

Vue.component('s-popover', Popover)

Vue.component('s-collapse', Collapse)
Vue.component('s-collapse-item', CollapseItem)

Vue.component('s-cascader', Cascader)
Vue.component('s-cascader-item', CascaderItem)

Vue.use(plugins)

new Vue({
	el: '#app',
	data: {
		loading: false,
		msg: 'hi',
		tabsSelected: 'sports',
		selectedCollapse: ['1', '2'],
		selectedCascader: [],
		cascaderSource: [
			{
				name: '浙江',
				children: [
					{
						name: '杭州',
						children: [
							{name: '上城'},
							{name: '下城'},
							{name: '江干'},
						]
					},
					{
						name: '嘉兴',
						children: [
							{name: '南湖'},
							{name: '秀洲'},
							{name: '嘉善'},
						]
					},
				]
		  }, {
			name: '福建',
			children: [
				{
					name: '福州',
					children: [
						{name: '鼓楼'},
						{name: '台江'},
						{name: '仓山'},
					]
				},
			]
		  }
		]
	},
	methods: {
		eventHandle(type, e) {
			console.log(type, e)
		},
		showToast(options) {
			// 如果是连续字母的话不会换行。。。
			this.$toast('他真的知道了他真的知道了他真的知道了他真的知道了他真的知道了他真的知道了', {
				// autoClose: false,
				buttonText: '知道了',
				afterClose() {
					console.log('他真的知道了')
				},
				html: `<strong>我是html</strong>`,
				...options
			})
		}
	}
})

// 单元测试：chai
// 已被测试框架替代，仅供学习参考
// import chai from 'chai'
// import spies from 'chai-spies'

// const expect = chai.expect
// chai.use(spies)

// try{
// 	// 测试按钮
// 	// 测试 icon 属性
// 	{
// 		// 获取组件构造函数
// 		const Constructor = Vue.extend(Button)
// 		// 创建测试实例
// 		const vm = new Constructor({
// 			// propsData 可以传递组件属性
// 			propsData: {
// 				icon: 'setting'
// 			}
// 		})
// 		vm.$mount()
// 		let useEle = vm.$el.querySelector('use')
// 		let href = useEle.getAttribute('xlink:href')
// 		expect(href).to.eq('#i-setting')
// 		// 销毁实例
// 		vm.$el.remove()
// 		vm.$destroy()
// 	}
// 	// 测试 loading 属性
// 	{
// 		const Constructor = Vue.extend(Button)
// 		const vm = new Constructor({
// 			propsData: {
// 				loading: true
// 			}
// 		})
// 		vm.$mount()
// 		let useEle = vm.$el.querySelector('use')
// 		let href = useEle.getAttribute('xlink:href')
// 		expect(href).to.eq('#i-loading')
// 		vm.$el.remove()
// 		vm.$destroy()
// 	}
// 	// 测试 icon-position 属性
// 	{
// 		// css 属性需要渲染到页面
// 		const div = document.createElement('div')
// 		document.body.appendChild(div)
	
// 		const Constructor = Vue.extend(Button)
// 		const vm = new Constructor({
// 			propsData: {
// 				icon: 'setting'
// 			}
// 		})
// 		// 渲染组件
// 		vm.$mount(div)
// 		let svg = vm.$el.querySelector('svg')
// 		// window.getComputedStyle()：返回对象，包含元素的所有CSS属性的值。
// 		let {order} = window.getComputedStyle(svg)
// 		expect(order).to.eq('1')
// 		vm.$el.remove()
// 		vm.$destroy()
// 	}
// 	{
// 		const div = document.createElement('div')
// 		document.body.appendChild(div)
	
// 		const Constructor = Vue.extend(Button)
// 		const vm = new Constructor({
// 			propsData: {
// 				icon: 'setting',
// 				iconPosition: 'right'
// 			}
// 		})
// 		vm.$mount(div)
// 		let svg = vm.$el.querySelector('svg')
// 		let {order} = window.getComputedStyle(svg)
// 		expect(order).to.eq('2')
// 		vm.$el.remove()
// 		vm.$destroy()
// 	}
// 	// 测试事件
// 	{
// 		const Constructor = Vue.extend(Button)
// 		const vm = new Constructor({
// 			propsData: {
// 				icon: 'setting',
// 				iconPosition: 'right'
// 			}
// 		})
// 		vm.$mount()
	
// 		// 方法1：
// 		// vm.$on('click', function() {
// 		// 	// 事件触发时执行
// 		// 	expect(1).to.eq(1)
// 		// })
// 		// let button = vm.$el
// 		// // 触发事件
// 		// button.click()
	
// 		// 方法2：使用 chai-spies
// 		let spy = chai.spy(function() {})
// 		vm.$on('click', spy)
// 		let button = vm.$el
// 		// 触发事件
// 		button.click()
// 		expect(spy).to.have.been.called()
	
// 		vm.$el.remove()
// 		vm.$destroy()
// 	}
// }catch(err) {
// 	window.errors = [err]
// }finally {
// 	window.errors && window.errors.forEach(err => {
// 		console.log(err.message)
// 	});
// }
