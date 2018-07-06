import {mount} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  test('should render correct contents', () => {
    const defaultMessage = 'Welcome to Your Vue.js App'
    const wrapper = mount(HelloWorld)
    expect(wrapper.find('.hello h1').text()).toBe(defaultMessage)
  })
})
