import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Upload from './upload.vue'
import Layout from './layout.vue'
import Content from './content.vue'
import Sider from './sider.vue'
import Footer from './footer.vue'
import Header from './header.vue'
import Cascader from './cascader.vue'

Vue.component('g-button-group', ButtonGroup)
Vue.component('g-button', Button)
Vue.component('g-cascader', Cascader)
Vue.component('g-col', Col)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-header', Header)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)
Vue.component('g-layout', Layout)
Vue.component('g-row', Row)
Vue.component('g-sider', Sider)
Vue.component('g-upload', Upload)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        source: [
            {
                name: 'Zhejiang',
                children: [
                    {
                        name: 'Hangzhou',
                        children: [
                            {
                                name: 'West Lake',
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Jiangsu',
                children: [
                    {
                        name: 'Nanjing',
                        children: [
                            {
                                name: 'Zhong Hua Men',
                            },
                        ],
                    },
                ],
            },
        ],
    }
})