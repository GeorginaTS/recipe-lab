import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ErrorMessage from '../ErrorMessage.vue';

describe('ErrorMessage', () => {
  const defaultProps = {
    message: 'Error de prova'
  };

  it('renderitza correctament', () => {
    const wrapper = mount(ErrorMessage, {
      props: defaultProps
    });
    expect(wrapper.find('.error-message').exists()).toBe(true);
    expect(wrapper.text()).toContain('Error de prova');
  });

  it('mostra el títol quan es passa com a prop', () => {
    const wrapper = mount(ErrorMessage, {
      props: {
        ...defaultProps,
        title: 'Error crític'
      }
    });
    expect(wrapper.find('h2').text()).toBe('Error crític');
  });

  it('no mostra el títol si no es passa', () => {
    const wrapper = mount(ErrorMessage, {
      props: defaultProps
    });
    expect(wrapper.find('h2').exists()).toBe(false);
  });

  it('mostra el botó de retry quan showRetry és true', () => {
    const wrapper = mount(ErrorMessage, {
      props: {
        ...defaultProps,
        showRetry: true,
        retryText: 'Tornar a intentar'
      }
    });
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('Tornar a intentar');
  });

  it('no mostra el botó de retry per defecte', () => {
    const wrapper = mount(ErrorMessage, {
      props: defaultProps
    });
    expect(wrapper.find('button').exists()).toBe(false);
  });

  it('emet l\'event retry quan es clica el botó', async () => {
    const wrapper = mount(ErrorMessage, {
      props: {
        ...defaultProps,
        showRetry: true
      }
    });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('retry')).toBeTruthy();
    expect(wrapper.emitted('retry')?.length).toBe(1);
  });

  it('té l\'atribut role="alert" per accessibilitat', () => {
    const wrapper = mount(ErrorMessage, {
      props: defaultProps
    });
    expect(wrapper.find('.error-message').attributes('role')).toBe('alert');
  });
});
