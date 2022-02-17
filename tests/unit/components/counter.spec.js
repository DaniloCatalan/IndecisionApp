import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
  let wrapper

  beforeEach(()=>{
    wrapper = shallowMount(Counter);
  })

  // test('debe de hacer match con el snapshot', () => {
  //   const wrapper = shallowMount(Counter)
  //   expect(wrapper.html()).toMatchSnapshot()
  // })

  test('h2 debe tener el valor por defecto "Counter"', () => {
    // comento, lo deje a nivel del describe
    // const wrapper = shallowMount(Counter)
    expect(wrapper.find('h2').exists()).toBeTruthy()

    const h2Value = wrapper.find('h2').text()
    expect(h2Value).toBe('Counter')
  })

  test('el valor por defecto debe ser 100 en el p', () => {

    // wrapper
    // comento, lo deje a nivel del describe
    // const wrapper = shallowMount(Counter)

    // ptags
    // const parrafos = wrapper.findAll('p')
    // const p = parrafos[1].text()

    // expect segundo p = 100
    const p = wrapper.find('[data-test-id="counter"]').text()
    expect(p).toBe('100')

  })

  test('debe de incrementar y decrementar el contador', async() => {
    // comento, lo deje a nivel del describe
    // const wrapper = shallowMount(Counter)
    const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button')

    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await decreaseBtn.trigger('click')
    await decreaseBtn.trigger('click')

    const value = wrapper.find('[data-test-id="counter"]').text()

    expect(value).toBe('101')

  })

  test('Debe establecer el valor por defecto', () => {
    const {start} = wrapper.props()
    
    const value = wrapper.find('[data-test-id="counter"]').text()
    expect(Number(value)).toBe(start)

  })

  test('Debe de mostrar la prop title', () => {
    const title = 'Hola Mundo !!!!!'
    const wrapper = shallowMount(Counter,{
      props:{
        title
      }
    })
    expect(wrapper.find('h2').text()).toBe(title)
  })
})
