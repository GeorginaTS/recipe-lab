import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import LoadingSpinner from '../LoadingSpinner.vue';

describe('LoadingSpinner', () => {
  it('renderitza correctament', () => {
    const wrapper = mount(LoadingSpinner);
    expect(wrapper.find('.loading-spinner').exists()).toBe(true);
    expect(wrapper.find('.spinner').exists()).toBe(true);
  });

  it('mostra el missatge quan es passa com a prop', () => {
    const message = 'Carregant dades...';
    const wrapper = mount(LoadingSpinner, {
      props: { message }
    });
    expect(wrapper.text()).toContain(message);
  });

  it('no mostra cap missatge si no es passa la prop', () => {
    const wrapper = mount(LoadingSpinner);
    expect(wrapper.find('p').exists()).toBe(false);
  });

  it('té els atributs ARIA correctes', () => {
    const wrapper = mount(LoadingSpinner);
    const container = wrapper.find('.loading-spinner');
    expect(container.attributes('role')).toBe('status');
    expect(container.attributes('aria-live')).toBe('polite');
  });
});
