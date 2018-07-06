import {shallowMount, createLocalVue} from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Actions from '@/components/Actions'
import appModule from '@/store/modules/app'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Actions.vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
      clicks: 0,
      inputValue: null
    }
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        app: {
          state,
          actions,
          getters: appModule.getters
        }
      }
    })
  })
  it('在输入输入值并处罚输入时，调用 action “actionInput”', () => {
    const wrapper = shallowMount(Actions, {store, localVue})
    const input = wrapper.find('input')
    input.element.value = 'input'
    input.trigger('input')
    expect(actions.actionInput).toHaveBeenCalled()
  })

  it('在输入值等于 not input时，不会调用 action “actionInput”', () => {
    const wrapper = shallowMount(Actions, {store, localVue})
    const input = wrapper.find('input')
    input.element.value = 'not input'
    input.trigger('input')
    expect(actions.actionInput)
      .not
      .toHaveBeenCalled()
  })
  it('在点击按钮时调用 action “actionClick”', () => {
    const wrapper = shallowMount(Actions, {store, localVue})
    const button = wrapper.find('button')
    button.trigger('click')
    /*     console.log('state: ', JSON.stringify(state))
    const vm = wrapper.vm
    console.log('actionClick: ', vm.actionClick)
    console.log('actionInput: ', vm.actionInput) */

    expect(actions.actionClick).toHaveBeenCalled()
  })

  it('在第一个 p 标签中渲染“state.inputValue”', () => {
    const wrapper = shallowMount(Actions, {store, localVue})
    const button = wrapper.find('button')
    button.trigger('click')
    button.trigger('click')
    button.trigger('click')
    button.trigger('click')
    button.trigger('click')
    button.trigger('click')
    button.trigger('click')
    button.trigger('click')
    button.trigger('click')
    const p = wrapper.find('p')
    Vue
      .nextTick()
      .then(() => {
        const p = wrapper.find('p')

        console.log('p - value: ', p.text(), Actions.clicks)
      })
    expect(p.text()).toBe(state.clicks.toString())
  })
})
