import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

  // test('debe de hacer match con el snapshot', () => {
  //   const wrapper = shallowMount(Counter)
  //   expect(wrapper.html()).toMatchSnapshot()
  // })

  // test('h2 debe tener el valor por defecto "Counter"', () => {
  //   const wrapper = shallowMount(Counter)
  //   expect(wrapper.find('h2').exists()).toBeTruthy()

  //   const h2Value = wrapper.find('h2').text()
  //   expect(h2Value).toBe('Counter')
  // })

  test('el valor por defecto debe ser 100 en el p', () => {

    // wrapper
    const wrapper = shallowMount(Counter)

    // ptags
    // const parrafos = wrapper.findAll('p')
    // const p = parrafos[1].text()

    // expect segundo p = 100
    const p = wrapper.find('[data-test-id="counter"]').text()
    expect(p).toBe('100')

  })
})
